import { FaExchangeAlt } from "react-icons/fa";
import './Task.scss';
import { CgRemove } from "react-icons/cg";

function Task(props) {
    const handleStatusClick = () => {
        const id = props.task.id;
        const status = props.task.status;

        props.onStatusChange(id, status);
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    }

    const statusClass = props.task.status == 'completed' ? 'completed' : 'open';

    return (
        <>
            {/* <hr className='task_hr' /> */}
            
            <tr>
                <td className="task_id">{props.task.id}</td>
                <td className="task_description">{props.task.description}</td>
                <td className={`${statusClass}`}>
                    <span className={`${statusClass}`}>{props.task.status == 'completed' ? 'Completed' : 'Open'}</span>
                </td>
                <td>
                    <button className="task_changestatus" onClick={handleStatusClick}><FaExchangeAlt /></button>
                </td>
                <td>
                    <button className="task_remove" onClick={handleRemoveClick}><CgRemove /></button>
                </td>
            </tr>
        </>
    );

}

export default Task;
