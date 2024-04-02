import Task from './Task/Task';
import './Task/Task.scss';
import { FaRegTrashCan } from "react-icons/fa6";

function Tasks({ loading, tasks, onStatusChange, onTaskRemove, onClearTasks, setTasks }) {
    
    return (
        <>
            { loading && (
                <div style={{color: 'orange'}}>Loading, please wait ...</div>
            )}

            { !loading && (
                <>
                    <h2 className="task_title">These are the tasks:</h2>
                    <button className="task_remove_all" onClick={onClearTasks}>
                        <FaRegTrashCan />  
                        <span> Clear Tasks</span>
                    </button>
                    <table className="task-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.length > 0 && tasks.map(
                                (task, index) => (
                                    <Task
                                        key={index}
                                        task={task}
                                        setTasks={setTasks}
                                        onStatusChange={onStatusChange}
                                        onTaskRemove={onTaskRemove}
                                    />
                                )
                            )}
                            {tasks.length == 0 && (
                                <p style={{ color: 'blue' }}>There are no task right now!</p>
                            )}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}
export default Tasks;
