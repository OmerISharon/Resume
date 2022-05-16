import "./Menu.css";

import { NavLink } from "react-router-dom"

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <div className="General">
                <p> <b>Birthdate:</b> <i>19, April, 1995</i></p>
                <p> <b>Address:</b> <i>Azeitim 1, Givat Shmuel, Israel</i></p>
                <p> <b>Languages:</b> <i> Hebrew, English</i></p>
            </div> 

            <NavLink to="/Home"> About Me </NavLink>
            <NavLink to="/Experience"> Professional Experience </NavLink>
            <NavLink to="/Education"> Education </NavLink>
        </div>
    );
}

export default Menu;
