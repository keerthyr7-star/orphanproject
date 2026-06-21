import React from 'react'
import './Reports.css'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTriangleExclamation,
  faVanShuttle,
  faHome,
  faUser,
  faLocationCrosshairs,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'


const Reports = () => {
  return (
    <>
    <div className="Dashboard-container">
        <header>
            <img src={logo} alt="" />
        
                <div className="headerdetail">
                      <h2>HopeHands</h2>
                <div className="pdeatil">
                      <p>chennai, Tamilnadu</p>
                </div>
                </div>     
        
                <div className="headerdetails2">
                    <h1>Dashboard</h1> 
        
                <div className="headericons">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-bell"></i>
                    <button>Reports</button>
                    </div>
                </div>
                   
               </header>

               <aside>
           
           <div className="sidemain">
              <h4>Main</h4>

              <div className="sidemainicons">
                <div className="sidemenuicon">
                  <i className="fa-solid fa-table-columns"></i> 
                  <a href="">Dashboard</a>
                  </div>
                  <div className="sidemenuicon">
                  <i className="fa-solid fa-camera"></i> 
                  <a href="">Reports</a>
                  </div>
                  <div className="sidemenuicon">
                  <i className="fa-solid fa-file-lines"></i> 
                  <a href="">My reports</a>
                  </div>
              </div>
           </div>
            
            <div className="sidemain">
                <h4>Community</h4>
                <div className="sidemainicons">
                <div className="sidemenuicon">
                  <i className="fa-solid fa-house"></i>
                  <a href="">Shelters</a>
                  </div>
                  <div className="sidemenuicon">
                  <i className="fa-solid fa-user-group"></i> 
                  <a href="">Volunteers</a>
                  </div>
                  
              </div>
            </div>

            <div className="sidemain">
            <h4>Account</h4>
            <div className="sidemainicons">
                <div className="sidemenuicon">
                  <i className="fa-regular fa-user"></i>
                  <a href="">Profile</a>
                  </div>
                  <div className="sidemenuicon">
                  <i className="fa-solid fa-gear"></i> 
                  <a href="">Settings</a>
                  </div>
                
              </div>
            </div>
       </aside>
       <main>
        
        <div className="mainHeading">
            <h1>Reports a Person in need</h1>
            <p>Fill the details below - your report will instantly notify nearby shelters and volunteers</p>
        </div>

        <div className="mainHeading2">
            <h4 className='h4class'>1</h4>
            <p>Photo</p>

            <h4 className='h4class'>2</h4>
            <p>Location</p>

            <h4 className='h4class'>3</h4>
            <p>Details</p>

            <h4 className='h4class'>4</h4>
            Share
        </div>

        <div className="mainHeading3">
        <div className="mainHeading33">
            <i className="fa-solid fa-camera-retro"></i>
            <h1>Upload Photo</h1>
        </div>
        <div className="mainHeading3sub">

          <div className="mainHeading3sub1">
            <i className="fa-solid fa-camera-retro"></i>
            <input type="file" accept="image/*" capture="environment" />
            Click to take a photo or upload from the gallery JPG, PNG supported. Helps rescuers identify the person 
         </div>
        </div>
        </div>

        <div className="mainForm">
          <div className="mainFormi">
            <i className="fa-solid fa-location-dot"></i>
            <h1>Location & Details</h1>
        </div>
  
        <form>
          <div className="inputpluslabel">
          <label>Location</label>
          <input
              type="text"
              placeholder="Current Location"
            />
          </div>
    
    
   

<div className="inputplusselect">

     <div className="selectcol">

        <label>Approximate Age</label>
          <select>
            <option>Select age</option>
            <option>0–10</option>
            <option>10–20</option>
            <option>20–30</option>
            <option>30–40</option>
            <option>40–50</option>
            <option>50+</option>
          </select>
</div>

<div className="selectcol">
          <label>Gender</label>
          <select>
          <option>Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
          </select>
          </div>
    </div>
    


    <div className="inputplusselect">

<div className="selectcol">
    <label>Condition</label>
    <select>
      <option>Select condition</option>
      <option>Critical</option>
      <option>Stable</option>
      <option>Needs Help</option>
    </select>
</div>
<div className="selectcol">
    <label>Category</label>
    <select>
      <option>Select category</option>
      <option>Child</option>
      <option>Elderly</option>
      <option>Homeless Adult</option>
    </select>
</div>
</div>
 <div className="inputplusselect">
    <label>Description</label>
</div>
<div className="inputpluslabel">
    <textarea
      placeholder="Describe what you see..."
    ></textarea>
</div>
  </form>
</div>

<div className="mainForm">

   <div className="mainFormi">
           <i className="fa-solid fa-share"></i>
            <h1>Share with</h1>
        </div>
  <form action="">
    <div className="inputpluslabel">
      <div className="inputplusselect">
       <button className="inputselectbtn">
          <i className="fa-solid fa-house"></i>
          Nearby Shelter
      </button>

      <button className="inputselectbtn">
          <i className="fa-solid fa-user-group"></i>
          Volunteers
      </button>
    </div>


    <div className="inputplusselect">
       <button className="inputselectbtn">
      <i className="fa-brands fa-whatsapp"></i>
      WhatsApp
    </button>

    <button className="inputselectbtn">
      <i className="fa-solid fa-phone"></i>
      Helpline 1098
    </button>
    </div>
    </div>  
    <div className="buttons">
        <button>Cancel</button>
        <button className="inputselectbtnn">
             <i className="fa-solid fa-paper-plane"></i>
             Submit report
        </button>
       
        
    </div>
  </form>
  </div>


       </main>
       <footer>
       
               <div className="footerTop">
                   <div className="footerCol1">
       
                     <h1>HopeHands</h1>
                       
                   <div className="location">
                       <FontAwesomeIcon icon={faLocationDot} />
                       <span>Chennai, Tamil Nadu</span>
                   </div>
       
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non explicabo eligendi accusamus optio deserunt ipsa, aperiam repellendus architecto excepturi.</p>
       
       
                       <div className="socialIcons">
                         <i className="fa-brands fa-instagram"></i>
                         <i className="fa-brands fa-facebook"></i>
                         <i className="fa-brands fa-whatsapp"></i>
                         <i className="fa-brands fa-linkedin"></i>
                       </div>
                   </div>
       
       
                   <div className="footerCol2">
                     <h1>Platform</h1>
       
                     <div className="footerMenus">
                         <a href="">
                           <i className="fa-solid fa-table-columns"></i>
                           Dashboard
                         </a>
       
                         <a href="">
                           <i className="fa-solid fa-camera"></i>
                           Report a Person
                         </a>
       
                         <a href="">
                           <i className="fa-solid fa-location-crosshairs"></i>
                           Live Map
                         </a>
                         <a href="">
                           <i className="fa-solid fa-file-lines"></i>
                           My Reports
                         </a>
       
                         <a href="">
                           <i className="fa-solid fa-house"></i>
                           Shelters
                         </a>
       
                         <a href="">
                           <i className="fa-solid fa-user-group"></i>
                           Volunteers
                         </a>
                     
                     </div>
                   </div>
       
       
                   <div className="footerCol3">
                     <h1>Support</h1>
                     <div className="footerMenus">
                         <a href="">
                           <i className="fa-solid fa-circle-info"></i>
                            About us
                         </a>
       
                         <a href="">
                           <i className="fa-solid fa-gears"></i>
                           How it works
                         </a>
       
                         <a href="">
                           <i className="fa-solid fa-shield-halved"></i>
                           Privacy policy
                         </a>
                         <a href="">
                           <i className="fa-solid fa-file-contract"></i>
                           Terms of use
                         </a>
       
                         <a href="">
                           <i className="fa-solid fa-phone"></i>
                           Contact us
                         </a>
       
                     </div>
                   </div>
                   <div className="footerCol4">
                     <h1 className="helpline">
                       <a href="tel:1098">
                         <i className="fa-solid fa-phone"></i>
                         Helpline 1098
                       </a>
                     </h1>
                     <p>Childline : 24/7</p>
                   </div>
       
             </div>
             <div className="footerBottom">
                <p className="copyright">
             © 2026 born2live. All rights reserved.
           </p>
             </div>
       
              </footer>
       
        
    </div>
    </>
  )
}

export default Reports
