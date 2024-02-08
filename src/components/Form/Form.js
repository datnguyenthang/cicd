import { useState } from "react";

function Form({ onAddTask }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmission = (event) => {
        event.preventDefault();
        if (description === '') {
            setErrorMessage('Enter a description.');
        }
        else {
            // Add the task.
            onAddTask(description, status);
            // Reset the form state.
            setDescription('')
            setStatus('open');
            setErrorMessage('');
        }
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <h2>Add a new task:</h2>

            {errorMessage !== '' && (
                <div style={{color: 'red'}}>{errorMessage}</div>
            )}

            <label>
                Description:
                <input
                    type='text'
                    maxLength={150}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <label>
                Status:
                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                >
                    <option value='open'>Open</option>
                    <option value='completed'>Completed</option>
                </select>
            </label>
            <button style={{marginLeft: '10px'}}>Add</button>
        </form>
    );
}
export default Form;