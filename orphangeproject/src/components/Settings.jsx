import React from 'react'
import './Settings.css'
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


const Settings = () => {
  return (
    <div className='Dashboard-container'>
     <header>
        <img src={logo} alt="" />
        <div className="headerdetail">
            <h2>HopeHands</h2>
        <div className="pdeatil">
            <p>chennai, Tamilnadu</p>
        </div>
        </div>     
                  
        <div className="headerdetails2">
            <h1>Settings</h1> 
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


            <div className="settingmaindivisions">
            <div className="settingsmainleft">

                <div className="iconanddeatil">
                    <a href="/account">
                    <i className="fa-solid fa-circle-user"></i>
                    <p>Account</p>
                    </a>
                </div>
                
                <div className="iconanddeatil">
                    <a href="/organization">
                    <i className="fa-solid fa-building"></i>
                    <p>Organiation</p>
                    </a>
                </div>

                <div className="iconanddeatil">
                    <a href="/volunteering">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                    <p>Volunteering</p>
                    </a>
                </div>

                <div className="iconanddeatil">
                    <a href="/notification">
                    <i className="fa-solid fa-bell"></i>
                    <p>Notification</p>
                    </a>
                </div>

                <div className="iconanddeatil">
                    <a href="/privacy">
                    <i className="fa-solid fa-lock"></i>
                    <p>Privacy & security</p>
                    </a>
                </div>

            </div>

            <div className="settingContainer">
            <div className="settingmain2">
            <div className="accountsettingshead">
                <h3>Account settings</h3>
                <h5>visible to everyone</h5>
            </div>

            <div className="settingmainform">
                <form action="">

                <div className="settingRow">
                <div className="settinglabelinput">  
                    <label htmlFor="">Full name</label>
                    <input type="text" placeholder='ex. Indhirani..'/>
                </div>

                <div className="settinglabelinput"> 
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='ex.indhu@gmail.com' />
                </div>
                </div>

                <div className="settingRow">
                <div className="settinglabelinput">
                    <label htmlFor="">Phone</label>
                    <input type="number" placeholder='98XXXXXXXX34' />
                </div>

                <div className="settinglabelinput">
                    <label htmlFor="">City</label>
                    <input type="text" placeholder='Chennai, Tamilndu' />
                </div>
               </div>

               <div className="changePwd">
                <div className="changePwdcolrow">
                <div className="changePwdcol1">
                    <h3>Change password</h3>
                    <p>Last changed 3 months ago</p>
                </div>
                    <button>Update</button>
                </div>
               </div>
            </form>
            </div>
            </div>

            <div className="settingmain3">
            <div className="accountsettingshead3">
                <h3>Organization setting</h3>
                <h6>admin only</h6>
            </div> 
            <div className="settingmainform3">
            <form action="">

               <div className="settingRow3">

                <div className="settinglabelinput3">  
                    <label htmlFor="">NGO name</label>
                    <input type="text" placeholder='Hopehands Foundation'/>
                </div>
                <div className="settinglabelinput3">  
                    <label htmlFor="">Registration no.</label>
                    <input type="text" placeholder='TN/NGO/2023/0456'/>
                </div>
                </div>

            </form>
            </div>

            </div>

            <div className="settingmain4">
            <div className="accountsettingshead4">
                <h3>Volunteering preferences</h3>
                <h6>volunteer only</h6>
            </div>

            <div className="volunteermainsec">
                <div className="volunteermainrow">
                <div className="volunteermaincol1">
                    <h3>Open to new cases</h3>
                    <p>Turn off when you're unavailable to help</p>
                </div>
                <div className="toggle">
                    <input type="checkbox" />
                    <span className='slider'></span>
                </div>
                </div>
           </div>


            <div className="vv">
            <div className="volunteermainrow">
                <div className="volunteermaincol1">
                    <h3>Share live location when reporting</h3>
                    <p>Helps shelters reach the spot faster</p>
                </div>
                <div className="toggle">
                    <input type="checkbox" />
                    <span className='slider'></span>
                </div>
            </div>

            <div className="zone">
                <p>Preferred zone</p>
                <input type="text" placeholder='Adyar, Chennai'/>
            </div>
            </div>
            </div>

            <div className="settingmain5">
                <div className="accountsettingshead5">
                    <h3>Notifications</h3>
                    <h5>Visible to everyone</h5>
                </div>
                <div className="notificationsec">
                <div className="notificationmainrow">
                <div className="notificationmaincol1">
                    <h3>New case alerts near me</h3>
                   
                </div>
                <div className="toggle">
                    <input type="checkbox" />
                    <span className='slider'></span>
                </div>
            </div>

            <div className="notificationmainrow">
                <div className="notificationmaincol1">
                    <h3>SMS updates</h3>
                   
                </div>
                <div className="toggle">
                    <input type="checkbox" />
                    <span className='slider'></span>
                </div>
            </div>
            </div>
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
  )
}

export default Settings
