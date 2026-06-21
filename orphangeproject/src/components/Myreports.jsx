import React from 'react'
import './Myreports.css'
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
const Myreports = () => {
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
            <h1>My Reports</h1>
            <p>Track all your submitted reports and their rescue status</p>
        </div>

        <div className="allStatus">


        <div className="status">
            <span className="dot"></span>
            <p>Total :3</p>
        </div>
        
        <div className="status">
            <span className="dot red"></span>
            New : 1
        </div>

    <div className="status">
            <span className="dot orange"></span>
            <p>In progress :1</p>
        </div>

        <div className="status">
            <span className="dot green"></span>
            <p>Rescued :3</p>
        </div>

        </div>

        <div className="searchlist">

        <div className="searchbar">

            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder='search..' />
        </div>
            <button>All</button>
            <button>New</button>
            <button>In progress</button>
            <button>Rescued</button>

        </div>

        <div className="addressMain">

            <div className="topSummary">
                <div className="iconaddress">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="tosubsum">
                    <div className="tosubsum1">
                        <i className="fa-solid fa-location-dot"></i>
                        <h4>Anna Nagar, Chennai</h4>
                    </div>
                     <p>Elderly man found near signal junction. Appears disoriented, no footwear.</p>

                     <div className="statusRow">
                        <p className='elderly'>Elderly</p>
                        <p className='critical'>Critical</p>
                        
                        <div className="new">
                            <span className="dot red"></span>
                            <p>New</p>
                        </div>
                     </div>


                </div>
                  <p className='pcls'>Today · 8 min ago</p>
            </div>

            <div className="middleTimeline">
            
                <p className='mtp'>STATUS TIMELINE</p>

                <div className="timelineItem">
                <div className="timelineDot"></div>
                    <h4>Report submitted</h4>
                    <p>Today 9.42 Sent to 3 shelters & 2 Volunteers</p>
                </div>

                <div className="timelineItem">
                <div className="timelineDot"></div>
                    <h4>Report submitted</h4>
                    <p>Today 9.42 Sent to 3 shelters & 2 Volunteers</p>
                </div>
            
            </div>

            <div className="buttons">
                <button>View details</button>
                <button>Share again</button>
            </div>

        </div>




        <div className="addressMain">

            <div className="topSummary">
                <div className="iconaddress">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="tosubsum">
                    <div className="tosubsum1">
                        <i className="fa-solid fa-location-dot"></i>
                        <h4>T. Nagar, Chennai</h4>
                    </div>
                     <p>Young woman with infant sitting outside temple. Needs food and shelter immediately.</p>

                     <div className="statusRow">
    <p className='wtd'>Women in distress</p>

    <p className='hungry'>Hungry</p>

    <div className="new">
        <span className="dot red"></span>
        <p>In progress</p>
    </div>
</div>


                </div>
                  <p className='pcls'>Today · 8 min ago</p>
            </div>

            <div className="middleTimeline">
            
                <p className='mtp'>STATUS TIMELINE</p>

                <div className="timelineItem">
                <div className="timelineDot"></div>
                    <h4>Report submitted</h4>
                    <p>Today 9.42</p>
                </div>

                <div className="timelineItem">
                <div className="timelineDot"></div>
                    <h4>Shelters accepted</h4>
                    <p>GCC Night Shelter — 8 beds available</p>
                </div>

                <div className="timelineItem">
                <div className="timelineDot"></div>
                    <h4>Volunteer en route</h4>
                    <p>Priya Shankar · ETA 10 min · 0.8 km away</p>
                </div>
            
            </div>

            <div className="buttons">
                <button>View details</button>
                <button>Share again</button>
            </div>

        </div>



        <div className="addressMain">

            <div className="topSummary">
                <div className="iconaddress">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="tosubsum">
                    <div className="tosubsum1">
                        <i className="fa-solid fa-location-dot"></i>
                        <h4>Anna Nagar, Chennai</h4>
                    </div>
                     <p>Elderly man found near signal junction. Appears disoriented, no footwear.</p>

                     <div className="statusRow">
                        <p className='elderly'>Elderly</p>
                        <p className='critical'>Critical</p>
                        
                        <div className="new">
                            <span className="dot red"></span>
                            <p>New</p>
                        </div>
                     </div>


                </div>
                  <p className='pcls'>Today · 8 min ago</p>
            </div>

            <div className="middleTimeline">
            
                <p className='mtp'>STATUS TIMELINE</p>

                <div className="timelineItem">
                <div className="timelineDot"></div>
                    <h4>Report submitted</h4>
                    <p>Today 9.42 Sent to 3 shelters & 2 Volunteers</p>
                </div>

                <div className="timelineItem">
                <div className="timelineDot"></div>
                    <h4>Report submitted</h4>
                    <p>Today 9.42 Sent to 3 shelters & 2 Volunteers</p>
                </div>
            
            </div>

            <div className="buttons">
                <button>View details</button>
                <button>Share again</button>
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

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis non explicabo eligendi accusamus.
            </p>

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

export default Myreports
