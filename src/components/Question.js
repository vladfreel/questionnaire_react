import React from 'react';
import Answer from "./Answer";

const Question = ({question, onRemoveQuestion=f=>f}) =>  {
    // debugger;
    return (
        <div className="single-question">
            <h4>{question.content}</h4>
            <button onClick={() => onRemoveQuestion(question.id)}>Delete</button>
            <div className="answers">
                {question.answers !== undefined && question.answers.map(a => (
                    <Answer answer={a} key={a.id}/>
                ))}
            </div>
        </div>
    )
}
export default Question;								