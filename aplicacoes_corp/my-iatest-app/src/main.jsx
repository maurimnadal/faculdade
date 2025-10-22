import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CadastroForm from './pages/CadastroForm'
createRoot(document.getElementById('root')).render(
 <StrictMode>
 <CadastroForm />
 </StrictMode>,
)
