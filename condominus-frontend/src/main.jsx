import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
        <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  </StrictMode>,
)
