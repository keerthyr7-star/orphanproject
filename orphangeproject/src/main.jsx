import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Dashboard from '../src/components/Dashboard.jsx'
// import Reports from './components/Reports.jsx'
// import Myreports from './components/Myreports.jsx'
// import Shelters from './components/Shelters.jsx'
// import Volunteers from './components/Volunteers.jsx'
// import Adminprofile from './components/Adminprofile.jsx'
// import Userprofile from './components/Userprofile.jsx'
import Settings from './components/Settings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Dashboard/> */}
    {/* <Reports/> */}
    {/* <Myreports/> */}
    {/* <Shelters/> */}
    {/* <Volunteers/> */}
    {/* <Adminprofile/> */}
    {/* <Userprofile/> */}
    <Settings/>
  </StrictMode>
)
