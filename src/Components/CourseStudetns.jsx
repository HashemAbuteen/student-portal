import React from "react";
import { useParams } from "react-router-dom";
import students from '../Data/students.json'
import StudentList from "./StudentList";

export default function CourseStudents(){
    let id= useParams().id;
    const courseStudents = students.filter((s) => s.courses.filter((c) => c.id === id).length>0)
    return (
        <StudentList students={courseStudents}/>
    );
}