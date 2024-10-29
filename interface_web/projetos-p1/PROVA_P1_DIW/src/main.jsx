import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HomePage from './SchoolHomePage.jsx'
import Classroom from './Classroom.jsx'
import StudentList from './StudentList.jsx'
import Teacher from './Teacher.jsx'
import School from './School.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <School />
  </StrictMode>,
)
