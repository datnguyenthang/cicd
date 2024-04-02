import { NavLink } from "react-router-dom";
import './MainMenu.scss';
function MainMenu() {
    return (
        <nav className="navbar">
            <NavLink className="link" to="/">Tasks</NavLink>
            <NavLink className="link" to="/add">Add</NavLink>
            <NavLink className="link" to="/help">Help</NavLink>
        </nav>
    )
};

export default MainMenu;