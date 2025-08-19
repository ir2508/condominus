import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'
import Login from './pages/Login/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
        <Login />
    </RecoilRoot>
  </StrictMode>,
)
