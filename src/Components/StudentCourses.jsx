import React from "react";
import { useParams } from "react-router-dom";
import studentsData from '../Data/students.json'
import Courses from "./Courses";


export default function StudentCourses() {
    let id= useParams().id;
    const courses = [...studentsData.filter((s)=> s.id===id)[0].courses]
    
    return (
        <Courses courses={courses}/>
    );
}