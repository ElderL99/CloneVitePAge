import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from "./components/navbar";
import FirstSection from './components/FirstSection.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <FirstSection/>
  </StrictMode>,
)
