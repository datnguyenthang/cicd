import { useState } from "react";
import { FaPlus } from 'react-icons/fa';
import './Form.scss';
import { useNavigate } from 'react-router-dom';

function Form({ onAddTask }) {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);
    const [countdown, setCountdown] = useState(5000);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleFormSubmission = (event) => {
        setResult(false);
        event.preventDefault();
        if (description === '') {
            setErrorMessage('Enter a description.');
        }
        else {
            onAddTask(description, status)
            .then(result => {
                if (result) {
                    setLoading(true);
                    setResult(true);
                    setTimeout(() => {
                        //setLoading(false);
                        navigate("/");
                    }, 3000);
                }
            })
            .catch((error) => {
                setErrorMessage(error);
            });

            setDescription('');
        }
    }

    return (
        <form className="form-adding-task" onSubmit={handleFormSubmission}>
            <h2>
                <FaPlus className="react-icon" />
                <span> Add a new task:</span>
            </h2>

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
            

            {result && (
                <div style={{color: 'green'}}>
                    <p>Add new task successfully!</p> 
                    <p>Please wait 3 seconds to redirect home page</p>
                </div>
            )}

            {loading && (
                <div style={{color: 'orange'}}>redirecting ....</div>
            )}

            {errorMessage !== '' && (
                <div style={{color: 'red'}}>{errorMessage}</div>
            )}

            <button className="btn-add">Add</button>
        </form>
    );
}
export default Form;