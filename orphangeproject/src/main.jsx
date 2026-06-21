import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Dashboard from '../src/components/Dashboard.jsx'
import Reports from './components/Reports.jsx'
import Myreports from './components/Myreports.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Dashboard/> */}
    {/* <Reports/> */}
    <Myreports/>
  </StrictMode>
)
