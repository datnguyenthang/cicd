import HelpMenu from "../Menu/Menu";

function HelpAdd() {
    
    return (
        <>
            <div className="help-page">
                <h2 className="task_title">This part will help you how to add a task in this application!</h2>
                <div className="help-content">
                    <p>To add a task in this application, follow these steps:</p>
                    <ol>
                        <li>Click on the "Add" link in the navigation menu.</li>
                        <li>Fill out the form with the task details, including title, description, and due date.</li>
                        <li>Click the "Add" button to add the task to your list.</li>
                    </ol>
                    <p>That's it! Your task has been successfully added to the application.</p>
                </div>
            </div>
            <HelpMenu />
        </>
    );
}
export default HelpAdd;
