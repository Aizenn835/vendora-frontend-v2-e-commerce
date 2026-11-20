import { IconUserCog , IconShieldCheck , IconProgressHelp , IconLogout} from '@tabler/icons-react';
import { validateToken } from '../../../utils/validator';
import './SettingsModal.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function SettingsModal({isOpen}){

    const navigate = useNavigate();

    const handleLogOut = () => {
        const token = localStorage.getItem("Token");
        if(!validateToken()){
            console.log("Invalid log out attempt.");
            return;
        };
        localStorage.removeItem("Token");
        navigate('/login');
    }
    return(
        <div className={`settings-modal-container ${isOpen ? 'settings-open' : ''}`}>
            <ul className="settings-list-container">
                <li className="settings-container">
                    <IconUserCog stroke={2} size={19}/>
                    <span className=''>Account Settings</span>
                </li>
                <li className="settings-container">
                    <IconShieldCheck stroke={2} size={19}/>
                    <span>Privacy & Security</span>
                </li>
                <li className="settings-container">
                    <IconProgressHelp stroke={2} size={19}/>
                    <span>Help & Support</span>
                </li>
                <li className="settings-container logout-setting" onClick={handleLogOut}>
                    <IconLogout stroke={2} size={19}/>
                    <span>Log Out</span>
                </li>
            </ul>
        </div>
    );
}