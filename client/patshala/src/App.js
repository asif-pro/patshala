import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard';
import Dashboard from './components/dashboard';
import AllStudents from './components/AllStudents';
import StudentDashboard from './components/StudentDashboard';
import StudentSubject from './components/StudentSubject';
import TeacherAssignment from './components/TeacherAssignment';
import AllSection from './components/AllSection';

function App() {
  return (
    
   
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/teacher_dashboard' element={<TeacherDashboard/>}></Route>
    <Route path='/student_dashboard' element={<StudentDashboard/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/allstudents' element={<AllStudents/>}></Route>
    <Route path='/allsubjects' element={<StudentSubject/>}></Route>
    <Route path='/teacher_assignments' element={<TeacherAssignment/>}></Route>
    <Route path='/all_sections' element={<AllSection/>}></Route>
  </Routes>
    
    
  );
}

export default App;
