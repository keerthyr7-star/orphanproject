import React from 'react'
import './Userprofile.css'
import logo from '../images/logo.png'
import oldman from '../images/oldman.jpg'
import child from '../images/child.jpg'
import groupbeggers from '../images/groupbeggers.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTriangleExclamation,
  faVanShuttle,
  faHome,
  faUser,
  faLocationCrosshairs,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'


const Userprofile = () => {
  return (
    <>
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
                          <h1>Admin profile</h1> 
              
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
            <div className="userProfilecontainer">
                <div className="usercol1">
                    <div className="userprofile">
                        <h1>IRK</h1>
                        <label htmlFor="upload">
                        <i className="fa-solid fa-camera"></i>
                        </label>
                        <input type="file" id="upload" hidden />
                    </div>

                    <div className="userDetails">
                            <h1>Indhu Krithi</h1>
                            <p>Member since Mar 2026</p>
                    </div>

                    <div className="userRole">
                            <p>Community Member</p>
                    </div>

                    <div className="editbtndetails">
                            <button>Edit profile</button>
                    </div>
                </div>

                <div className="usercols">
                    <div className="usercol2">
                            <p>Personal information</p>

                            <form action="">
                            <div className="adminform">
                               
                                <div className="labinpmain">
                                    <div className="labelinput">
                                        <label htmlFor="" >Full name</label>
                                        <input type="text"  placeholder='Ranjendran R.V'/>
                                    </div>

                                    <div className="labelinput">
                                        <label htmlFor="">Phone</label>
                                        <input type="number" placeholder='98XXXXXX00'/>
                                    </div>

                                    <div className="labelinput">
                                        <label htmlFor="">Email</label>
                                        <input type="email" placeholder='rajendrenrv@gmail.com' />
                                    </div>

                                    <div className="labelinput">
                                        <label htmlFor="">City</label>
                                        <input type="text" placeholder='Chennai Tamilnadu'/>

                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                </div>

            </div>



            <div className="boxes">

                          <div className="adminreports">
                            <i className="fa-solid fa-camera"></i>
                            <h1>6</h1>
                            <p>Reports filled</p>
                         </div>

                          <div className="adminreports">
                             <i className="fa-solid fa-circle-check"></i>
                            <h1>5</h1>
                            <p>People helped</p>
                         </div>

                         <div className="adminreports">
                             <i className="fa-solid fa-clock"></i>
                            <h1>1</h1>
                            <p>Pending review</p>
                         </div>

                        </div>

                        <div className="recentactivity">

                            <div className="recentmain">
                                <p className='pp'>Recent admin activity</p>
                                <p className='viewall'>View all</p>
                            </div>
                            <div className="currentupdate">

                                <img src={oldman} alt="" />
                                   <div className="currentupdatedetails">

                                    <div className="topline">
                                        <p className='cup1'>Elderly man near Marina Beach signal</p>
                                        <p className='resolved'>Resolved</p>
                                    </div> 
                                    <p className='cup2'>T. Nagar · 2 days ago</p>              
                                    </div>
                                </div>

                                <div className="currentupdate">

                                <img src={child} alt="" />
                                   <div className="currentupdatedetails">

                                    <div className="topline">
                                        <p className='cup1'>Child alone outside Mylapore temple</p>
                                        <p className='inprogress'>In progress</p>
                                    </div> 
                                    <p className='cup2'>Mylapore · 5 days ago</p>              
                                    </div>
                                </div>

                                <div className="currentupdate">

                                <img src={groupbeggers} alt="" />
                                   <div className="currentupdatedetails">

                                    <div className="topline">
                                        <p className='cup1'>Family sleeping outside Guindy station</p>
                                        <p className='resolved'>Resolved</p>
                                    </div> 
                                    <p className='cup2'>Guindy · 1 week ago</p>              
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

export default Userprofile
