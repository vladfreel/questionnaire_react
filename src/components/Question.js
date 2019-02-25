import React from 'react';
import Answer from "./Answer";

const Question = ({question}) =>  {
    // debugger;
    return (
        <div className="single-question">
            <h4>{question.content}</h4>
            <div className="answers">
                {question.answers.length && question.answers.map(a => (
                    <Answer answer={a} key={a.id}/>
                ))}
            </div>
        </div>
    )
}
export default Question;								