import HelpMenu from "../Menu/Menu";

function RemoveAdd() {
    
    return (
        <>
            <div className="help-page">
                <h2 className="task_title">This part will help you to remove a task in this application!</h2>
                <div className="help-content">
                    <p>To remove a task from this application, follow these steps:</p>
                    <ol>
                        <li>Click on the task you want to remove in the task list.</li>
                        <li>On the task details page, click on the "Delete" or "Remove" button.</li>
                    </ol>
                    <p>That's it! The selected task has been successfully removed from the application.</p>
                </div>
            </div>
            <HelpMenu />
        </>
    );
}
export default RemoveAdd;
