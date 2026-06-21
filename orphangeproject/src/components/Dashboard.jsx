
import React from 'react'
import './Dashboard.css'
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



const Dashboard = () => {
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
          
            <div className="mainContainer">
        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faTriangleExclamation} className="reportIcon" />Reports
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>

        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faVanShuttle} className='rescueIcon' />Rescued
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>

        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faHome} className='shelterIcon' />Shelters
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>

        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faUser} className='userIcon' />Volunteers
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>
      </div>


<div className="mapSection">

 
  <div className="mapBox">

    <div className="cardHeader">
      <FontAwesomeIcon
        icon={faLocationCrosshairs}
        className="cardIcon"
      />
      <h3>LIVE MAP</h3>
    </div>

    <div className="mapContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52708.607614881716!2d77.71997566154472!3d10.918678492683666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99b99c13a854b%3A0x45329ed366ee37a8!2sSri%20Murugan%20Mahal!5e0!3m2!1sen!2sin!4v1780325875952!5m2!1sen!2sin"
        title="live-map"
      />
    </div>

  </div>


  <div className="reportsBox">

    <div className="cardHeader">
      <FontAwesomeIcon
        icon={faLocationCrosshairs}
        className="cardIcon"
      />
      <h3>RECENT RESCUE REPORTS</h3>
    </div>

    <div className="rescueList">

      <div className="rescueDetails">
        <div className="left">
          <h4>Elderly person in distress</h4>
          <p>Chennai, Tnagar</p>
        </div>

        <div className="right">
          <p className="status status-critical">
            Critical
          </p>

          <span>2 min ago</span>
        </div>
      </div>

      <div className="rescueDetails">
        <div className="left">
          <h4>Elderly person in distress</h4>
          <p>Chennai, Tnagar</p>
        </div>

        <div className="right">
          <p className="status status-critical">
            Critical
          </p>

          <span>2 min ago</span>
        </div>
      </div>

    </div>

  </div>

</div> 

<div className="mapSection" style={{ paddingTop: '0' }}>

    {/* BOX 3: NEARBY SHELTERS */}
    <div className="dashboardCard shelterContainer">
        <div className="cardHeader">
            <FontAwesomeIcon icon={faLocationCrosshairs} className="cardIcon" />
            <h3>NEARBY SHELTERS</h3>
        </div>

        <div className="shelterList">
            {/* Shelter Item 1 */}
            <div className="shelterDetails">
                <div className="shelterLeft">
                    <h4>Hope Shelter</h4>
                    <p>Anna Nagar, Chennai • 12km</p>
                </div>
                <div className="shelterRight">
                    <span>68% full</span>
                    <div className="progressBarBg">
                        <div className="progressBarFill" style={{ width: '68%' }}></div>
                    </div>
                </div>
            </div>
            
            {/* Shelter Item 2 */}
            <div className="shelterDetails">
                <div className="shelterLeft">
                    <h4>Grace Care Centre</h4>
                    <p>Trichy Main, Trichy • 8km</p>
                </div>
                <div className="shelterRight">
                    <span>91% full</span>
                    <div className="progressBarBg">
                        <div className="progressBarFill" style={{ width: '91%', backgroundColor: '#ef4444' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* BOX 4: VOLUNTEER ACTIVITY */}
    <div className="dashboardCard volunteerContainer">
        <div className="cardHeader">
            <FontAwesomeIcon icon={faUser} className="cardIcon" />
            <h3>VOLUNTEER ACTIVITY</h3>
        </div>

        <div className="volunteerList">
            {/* Volunteer Item 1 */}
            <div className="volunteerDetails">
                <div className="volunteerAvatar" style={{ backgroundColor: '#eff6ff', color: '#1e40af' }}>AR</div>
                <div className="volunteerLeft">
                    <h4>Arun accepted a rescue report</h4>
                    <p>Chennai • 5 min ago</p>
                </div>
                <div className="volunteerRight">
                    <span className="badge status-active">Active</span>
                </div>
            </div>

            {/* Volunteer Item 2 */}
            <div className="volunteerDetails">
                <div className="volunteerAvatar" style={{ backgroundColor: '#f0fdf4', color: '#166534' }}>PR</div>
                <div className="volunteerLeft">
                    <h4>Priya completed a rescue</h4>
                    <p>Trichy • 23 min ago</p>
                </div>
                <div className="volunteerRight">
                    <span className="badge status-done">Done</span>
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
    </>
  )
}

export default Dashboard
