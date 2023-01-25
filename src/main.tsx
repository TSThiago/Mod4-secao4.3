
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormPage from './Components/Page/FormPage'
import App from './Components/Page/ProductsPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cadastro" element={<FormPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
