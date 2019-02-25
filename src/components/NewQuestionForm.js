import React from 'react';

const NewQuestionForm = ({onNewQuestion = f => f}) => {
    let content;
    const submit = e => {
        e.preventDefault();
        onNewQuestion(content.value);
        content.value = '';
        content.focus()
    };

    return (
        <form onSubmit={submit}>
            <input  ref={input => content = input}
                    type="text"
                    placeholder="Title..." required />
            <button>Add List</button>
        </form>
    )
}

export default NewQuestionForm;