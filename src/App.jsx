import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses";
import CourseStudents from "./Components/CourseStudetns";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import StudentCourses from "./Components/StudentCourses";
import StudentList from "./Components/StudentList";
import courses from "./Data/courses.json";
import students from "./Data/students.json";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <Navigation openLogin={() => setShow(true)} />
      <main>
        <Routes>
          <Route path="/*" element={<h1>Error Page Not Found</h1>} />
          <Route
            path="/students"
            element={<StudentList students={students} />}
          />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route path="/" element={<h1>Welcome to My student portal</h1>} />
          <Route path="/students/:id/courses" element={<StudentCourses />} />
          <Route path="/courses/:id/students" element={<CourseStudents />} />
        </Routes>
        <Login show={show} closeModal={() => setShow(false)} />
      </main>
    </Router>
  );
}

export default App;
