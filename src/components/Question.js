import React from 'react';
const Question = ({question}) =>
    <div className="single-question" key={question.id}>
        <h4>{question.content}</h4>
    </div>
export default Question;