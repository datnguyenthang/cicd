import HelpMenu from "../Menu/Menu";

function ChangeAdd() {
    
    return (
        <>
            <div className="help-page">
                <h2 className="task_title">This part will help you to change a task in this application!</h2>
                <div className="help-content">
                    <p>To change a task in this application, follow these steps:</p>
                    <ol>
                        <li>Click on the task you want to change in the task list.</li>
                        <li>On the task details page, click on the "change" button icon.</li>
                        <li>It will change the status of task.</li>
                    </ol>
                    <p>That's it! Your changes to the task have been successfully updated in the application.</p>
                </div>
            </div>
            <HelpMenu />
        </>
    );
}
export default ChangeAdd;
