import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../Home/Home";


const Header = () => {
    const info = useContext(data);
    return (
        <div>
            <p>this is header</p>
            <nav>
                <ul>
                    <li><NavLink to="/normalForm">click here go to normal form</NavLink></li>
                    <p>{info}</p>
                </ul>
            </nav>
        </div>
    );
};

export default Header;