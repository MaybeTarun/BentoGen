import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)