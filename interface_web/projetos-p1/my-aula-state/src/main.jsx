import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contador from '/components/contador.jsx'
import PerfilUsuario from '/components/perfil.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PerfilUsuario />
  </StrictMode>,
)
