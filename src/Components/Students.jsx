import { useState } from 'react';
import AddStudent from './AddStudent';
import Search from './Search';
import StudentList from './StudentList';
import studentsData from '../Data/students.json'


function Students() {
  const [students, setStudents] = useState(studentsData)
  const [visibleStudents, setVisibleStudents] = useState(students)

  
  

  const studentCreated = (student) => {
    if (students.filter(s => s.id === student.id).length > 0){
      console.log("ID: " + student.id + " Already exists")
      return
    }
    const tempArray = [...students]
    tempArray.push(student)
    setStudents(tempArray)
    setVisibleStudents(tempArray)
  }

  const deleteStudent = (student) => {
    console.log("Deleting ")
    console.log(student)
    const tempArray = [...students].filter(s => s!==student)
    setStudents(tempArray )
    setVisibleStudents(tempArray)
  }

  const search = (student) => {
    console.log("searching for")
    console.log(student)
    let tempArray = [...students]
    if(student.id ==='' & student.name===''){
      return
    }
    else if(student.id !=='' & student.name!==''){
      tempArray = tempArray.filter(s => s.id===student.id&& s.name === student.name)
    }
    else if(student.id !==''){
      tempArray = tempArray.filter(s => s.id===student.id)
    }
    else if(student.name!==''){
      tempArray = tempArray.filter(s => s.name === student.name)
    }
    setVisibleStudents(tempArray)
  }

  const resetSerach = () => {
    setVisibleStudents(students)
  }

  return (
    <>
      <AddStudent onAdd= {studentCreated}/> <br/>
      <Search search = {search}/> <br/>
      <button onClick={resetSerach}>Reset Search</button>
      <StudentList students={visibleStudents} deleteStudent={deleteStudent} />
    </>
  );
}

export default Students;
