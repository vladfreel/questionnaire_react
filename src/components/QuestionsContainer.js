import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';
import NewQuestionForm from './NewQuestionForm';

class QuestionsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            questions: []
        };
        this.addNewQuestion = this.addNewQuestion.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/questions.json')
        .then(response => {
            console.log(response);
            this.setState({
                questions: response.data
            })
        })
        .catch(error => console.log(error))
    }
    addNewQuestion = content => {
        axios.post( '/api/v1/questions', { question: {content: content} })
            .then(response => {
                console.log(response)
                const questions = [ ...this.state.questions, response.data ]
                this.setState({questions})
            })
            .catch(error => {
                console.log(error)
            })
    }

    removeQuestion = id => {
        axios.delete( '/api/v1/questions/' + id )
            .then(response => {
                console.log(response);
                console.log(this);
                const questions = this.state.questions.filter(
                    question => question.id !== id
                );
                this.setState({questions})
            })
            .catch(error => console.log(error))
    }

    render() {
            return (
                <div className="container">
                    <div className="questions-container">
                        {this.state.questions.map( question => (
                            <Question question={question} key={question.id} onRemoveQuestion={this.removeQuestion}/>
                        ))}
                        <NewQuestionForm onNewQuestion={this.addNewQuestion} />
                    </div>
                </div>
            )
        }
}

export default QuestionsContainer;