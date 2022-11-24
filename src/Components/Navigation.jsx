import React from "react";
import { NavLink } from "react-router-dom";

function Navigation ({openLogin}){
    return(
        <nav>
        <ul>
            <li>
            <NavLink
                to="/students"
            >
                Students
            </NavLink>
            </li>
            <li>
            <NavLink
                to="/courses"
                >
                Courses
            </NavLink>
            </li>
            <li>
            <button onClick={openLogin}>
                Login
            </button>
            </li>
        </ul>
        </nav>

    );
}

export default Navigation