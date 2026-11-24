import './AdminContentHeader.css'
import { IconSearch , IconSettings , IconInbox , IconBrandAppgallery} from '@tabler/icons-react';

export default function AdminContentHeader({onAddClick}){
    return(
       <header className="admin-content-header-container">
         <div className="left-content-header-admin-container">
            <h3 className="left-admin-text">Seller applications</h3>
            <p className="supporting-text-admin-header">Review and approve shops that want to sell on Vendora</p>
         </div>
         <div className="right-content-header-admin-container">
            <div className="search-admin-container">
                <IconSearch stroke={2} size={16} className='svg-icon-admin search-glass' />
                <input type="text" placeholder='Search...' className='search-admin'/>
            </div>
            <div className="add-seller-application-admin-container">
                <IconBrandAppgallery stroke={2} size={21} title="Store" className='svg-icon-admin'/>
            </div>
            <div className="inbox-admin-container">
                <IconInbox stroke={2} size={21} className='svg-icon-admin' title='Inbox'/>
                <div className="inbox-admin-count">20</div>
            </div>
            <div className="settings-admin-container">
                <IconSettings stroke={2} size={21} className='svg-icon-admin' title='Settings'/>
            </div>
         </div>
         
       </header>
    );
}