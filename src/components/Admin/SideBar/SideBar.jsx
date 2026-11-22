import './SideBar.css'
import logo from '../../../assets/logo-vendora/logo-mark.svg'
import profile from '../../../assets/admin-images/admin-pfp.jpeg'
import { useState } from 'react';
import { IconLayoutDashboard , IconFilePencil , IconReportAnalytics , IconHeartHandshake , IconSettings} from '@tabler/icons-react';




const nav = [
    {logo: IconLayoutDashboard , text: 'Overview'},
    {logo: IconFilePencil , text: 'Seller Application'},
    {logo: IconReportAnalytics , text: 'Sales'},
    {logo: IconHeartHandshake , text: 'Commision'},
    {logo: IconSettings , text: 'Settings'},
];

const logoName = ['Overview' , 'Seller Application' , 'Sales' , 'Commision' , 'Settings'];

export default function SideBar(){

    const [activeNav , setActiveNav] = useState("Overview");

    return(
        <div className="admin-sidebar-container">
            <div className="admin-sidebar-logo-container">
                <img src={logo} alt="This is the official Vendora logo." className='logo-vendora-sidebar-admin'/>
                <div className="logo-text-container">
                    <h3 className='logo-text'>VENDORA</h3>
                    <span className="admin-text">Admin</span>
                </div>
            </div>
            <nav className="application-container">
                <ul className="nav-list-admin">
                    {
                        nav.map((li , index) => (
                            <li className={`nav-text-admin ${activeNav === li.text ? 'active-admin-tab' : ''}`} onClick={() => setActiveNav(logoName[index])}  key={index}>
                                <a href="#">
                                    <li.logo stroke={2} size={19} className='svg-admin-sidebar' />
                                    <span className={`nav-text-admin ${activeNav === li.text ? 'active-text' : ''} `}>{li.text}</span>
                                </a>
                            </li> 
                        ))
                    }  
                </ul>
                <div className="pfp-admin-container">
                    <div className="online-pfp-admin-container">
                        <img src={profile} alt="Profile image" className='pfp-image-admin'/>
                        <div className="online-indicator-admin"></div>
                    </div>
                    <div className="pfp-user-info-container">
                        <p className="user-name-admin">Carla Santa Cruz</p>
                        <span className='user-email-admin'>cruz.carla@gmail.com</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}