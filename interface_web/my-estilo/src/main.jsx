import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import OutroApp from './OutroApp.jsx'
import './index.css'
import Component from './component.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
  )
  
