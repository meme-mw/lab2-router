import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Route from './routes/route.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Route/>
  </StrictMode>,
)
