import React from 'react';

const Answer = ({answer}) =>  {
    // debugger;
    return (
        <div className="single-answer">
            <h4 key={answer.id}>{answer.content}</h4>
        </div>
    )
}
export default Answer;