
import { IconLayoutDashboard , IconFilePencil , IconReportAnalytics , IconHeartHandshake , IconSettings} from '@tabler/icons-react';
import logo from '../../../assets/logo-vendora/logo-mark.svg'
import { adminInfo } from '../../../api/admin';
import profile from '../../../assets/admin-images/admin-pfp.jpeg'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'


const nav = [
    { logo: IconLayoutDashboard, text: "Overview", path: "/admin/overview" },
    { logo: IconFilePencil, text: "Seller applications", path: "/admin/seller-application" },
    { logo: IconReportAnalytics, text: "Sales", path: "/admin/sales" },
    { logo: IconHeartHandshake, text: "Commission", path: "/admin/commission" },
    { logo: IconSettings, text: "Settings", path: "/admin/settings" },
];


export default function SideBar(){

    const [admin , setAdmin] = useState("");
    const [email , setEmail] = useState("");
    const [error , setError] = useState("");
    const [isLoading , setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        let ignore = false;

        adminInfo()
         .then((response) => {
            if(!ignore) {
                setAdmin(response?.data?.name);
                setEmail(response?.data?.email);
            }
         })
         .catch((err) => {
            if(!ignore) setError(err.response?.data?.message || "Failed to fetch current admin info.");
         })
         .finally(() => {
            setIsLoading(false);
         });
         return (() => {
            ignore = true;
         });
    });


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
                        {nav.map((li , index) => (
                            <li className='nav-text-admin' key={index}>
                                <NavLink to={li.path} className={({isActive}) => isActive ? "active-admin-tab" : ""}>
                                    <li.logo stroke={2} size={19} className='svg-admin-sidebar' />
                                    <span className='nav-text-admin'>{li.text}</span>
                                </NavLink>
                            </li> 
                        ))}  
                </ul>
                <div className="pfp-admin-container">
                    <div className="online-pfp-admin-container">
                        <img src={profile} alt="Profile image" className='pfp-image-admin'/>
                        <div className="online-indicator-admin"></div>
                    </div>
                    <div className="pfp-user-info-container">
                        <p className="user-name-admin">{admin}</p>
                        <span className='user-email-admin'>{email}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}