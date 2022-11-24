import React from "react";
import { NavLink } from "react-router-dom";

const StudentList = (props) => {
    return (
        <div>
            <ul className="table">
                {props.students.map(s => 
                <li key={s.id}>  <NavLink to={`/students/${s.id}/courses`}>id: {s.id} --- name: {s.name} </NavLink><button onClick={() =>props.deleteStudent(s)}>X</button></li>
                    )}
            </ul>
        </div>
        )
}

export default StudentList