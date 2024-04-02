import { FaReact } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";
import './Header.scss';
import MainMenu from '../MainMenu/MainMenu';

function Header() {
    return (
        <>
            <header>
                <h1 className="title">
                    <FaReact className="react-icon" />
                    <span>Todo App</span> 
                    <FaRegStar className="react-icon" />
                </h1>
                <h1 className="developer">(by Dat Nguyen)</h1>
            </header>
            <MainMenu />
        </>
    );
}
export default Header;