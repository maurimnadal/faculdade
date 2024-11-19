import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyGet from './MyGet.jsx'
import MyPost from './MyPost.jsx'
import MyDelete from './MyDelete.jsx'
import MyUpdate from './MyUpdate.jsx'
import MyAll from './MyAll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyAll />
  </StrictMode>,
)
