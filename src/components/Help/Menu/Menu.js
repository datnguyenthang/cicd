import { NavLink } from "react-router-dom";

function HelpMenu() {
    return (
        <ul style={{listStyleType: 'none'}}>
            <li><NavLink style={{ color: 'red' }} className="link" to="/help/add">Help to add</NavLink></li>
            <li><NavLink style={{ color: 'red' }} className="link" to="/help/change">Help to change</NavLink></li>
            <li><NavLink style={{ color: 'red' }} className="link" to="/help/remove">Help to remove</NavLink></li>
        </ul>
    )
};

export default HelpMenu;