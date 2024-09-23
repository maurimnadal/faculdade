import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IMC from '/components/imc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IMC />
  </StrictMode>,
)

