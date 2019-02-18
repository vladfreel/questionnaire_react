import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class QuestionsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            questions: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/questions.json')
        .then(response => {
            console.log(response)
            this.setState({
                questions: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
            return (
                <div className="questions-container">
                    {this.state.questions.map( question => {
                        return (<Question question={question} key={question.id} />)
                    })}
                </div>
            )
        }
}

export default QuestionsContainer;