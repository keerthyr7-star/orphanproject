import React from 'react'
import './Volunteers.css'
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


const Volunteers = () => {
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

             <div className="volunteersMain">
                <h1>Nearby Shelters</h1>
                <button className='volunteersBtn'>Add Shelters</button>
            </div>

            <div className="volunteerscontainer">

            <div className="volunteersContainer">
                 <i class="fa-solid fa-users"></i>
                 <h1>86</h1>
                <p>Total volunteers</p>
            </div>

            <div className="volunteersContainer">
               <i class="fa-solid fa-circle-check"></i>
                 <h1>86</h1>
                <p>Total volunteers</p>
            </div>

            <div className="volunteersContainer">
               <i class="fa-solid fa-briefcase-medical"></i>
                 <h1>86</h1>
                <p>Total volunteers</p>
            </div>

            <div className="volunteersContainer">
               <i class="fa-solid fa-medal"></i>
                 <h1>86</h1>
                <p>Total volunteers</p>
            </div>

            </div>

            <div className="findings">

            <div className="iconsplusshelterfind">
            <i class="fa-solid fa-location-dot"></i>
            <div className="shelterFindings">
               
                <h1>Find volunteers near a report</h1>
            </div>
        </div>

            <div className="selectplusfilter">
            <select name="" id="">
                <option value="">Status all:</option>
                <option value="">Nearby Volunteers</option>
                <option value="">On duty</option>
            </select>


            <div className="filterShel">
                <i className="fa-solid fa-filter none"></i>
                <input type="text" placeholder="Search volunteers..." />
            </div>
            </div>

        </div>
            <div className="Allvolunteers">
            <div className="shelterHomes">
                <h1>RK</h1>

                <div className="volunteersName">
                    <p>Ravi Kumar</p>
                    <p>Adyar Zone</p>
                </div>

                <i class="fa-solid fa-star"></i>
                <p>28</p>

                <p>rescues</p>

                <i class="fa-solid fa-phone"></i>
                <p>98XXXXXXX12</p>
              

                <div className="buttons">
                    <button>Details</button>
                    <i class="fa-solid fa-phone"></i>
                </div>

            </div>

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

export default Volunteers
