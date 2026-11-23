import SideBar from './SideBar/SideBar';
import './Admin.css'
import { Outlet } from 'react-router-dom';

export default function Admin(){
    return(
        <div className="admin-container">
            <SideBar />
            <main className='main-content-admin'>
                <Outlet />
            </main>
        </div>
    );
}