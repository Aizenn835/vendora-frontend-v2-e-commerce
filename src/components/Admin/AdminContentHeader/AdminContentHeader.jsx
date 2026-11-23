import './AdminContentHeader.css'
import { IconBell , IconSettings , IconMessage } from '@tabler/icons-react';

export default function AdminContentHeader({onAddClick}){
    return(
       <div className="admin-content-header-container">
         <div className="left-content-header-admin-container">
            <h3 className="greeting-admin-header">Goodmorning, Carla</h3>
            <p className="supporting-text-admin-header">You have 3 tasks due today. Let’s get started</p>
         </div>
         <div className="right-content-header-admin-container">
            <div className="add-seller-application-admin-container" onClick={onAddClick}>
                <span className='add-icon-admin-seller'>+</span>
            </div>
            <div className="message-admin-container">
                <IconMessage stroke={2} size={21} className='svg-icon-admin'/>
            </div>
            <div className="notif-admin-container">
                <IconBell stroke={2} size={21} className='svg-icon-admin'/>
                <div className="notif-admin-count">20</div>
            </div>
            <div className="settings-admin-container">
                <IconSettings stroke={2} size={21} className='svg-icon-admin'/>
            </div>
         </div>
         
       </div>
    );
}