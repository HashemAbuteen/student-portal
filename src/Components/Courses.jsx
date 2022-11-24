import React from "react";
import { NavLink } from "react-router-dom";

export default function Courses(props){
    return (
        <div>
            <ul className="table">
                {props.courses.map(c => 
                <li key={c.id}> <NavLink to={`/courses/${c.id}/students`}>id: {c.id} --- name: {c.name} </NavLink></li>
                    )}
            </ul>
        </div>
        );
}