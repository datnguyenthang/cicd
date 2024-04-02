import HelpMenu from "./Menu/Menu";

function Help() {
    
    return (
        <>
            <div className="help-page">
                <h2 className="task_title">This part will help you use this application!</h2>
                <div className="help-content">
                    <p>Welcome to our application help page. Here you can find guidance on how to use our features:</p>
                    <ul>
                        <li>Get to task to do.</li>
                        <li>Learn how to add tasks.</li>
                        <li>Understand how to manage your tasks.</li>
                    </ul>
                </div>
            </div>
            <HelpMenu />
        </>
    );
}
export default Help;
