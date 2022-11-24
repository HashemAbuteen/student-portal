import React, {useState}from "react";

const AddStudent = (props) => {
    const [studentId, setStudentId] = useState("")
    const [studentName, setStudentName] = useState("")

    const onAddStudentHandler = (e) => {
        let student = {
            id:studentId,
            name:studentName
        }
        props.onAdd(student)
    }

    const changeStudentId = (e) => {
        setStudentId(e.target.value)
    }

    const changeStudentName = (e) => {
        setStudentName(e.target.value)
    }

    return (
    <>
        <label>Student ID</label>
        <input type="text" name="" id="" onChange={changeStudentId} value={studentId}/>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" onChange={changeStudentName} value={studentName}/>
        <button onClick={onAddStudentHandler}>Add</button>
    </>
    )
}

export default AddStudent