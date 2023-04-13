import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
  return (
    
   
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/teacher_dashboard' element={<TeacherDashboard/>}></Route>
  </Routes>
    
    
  );
}

export default App;
