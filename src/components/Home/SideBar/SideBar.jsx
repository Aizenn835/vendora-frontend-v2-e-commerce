import { IconSparkles , IconShoppingBag , IconCategory , IconBrandAppgallery } from '@tabler/icons-react';
import { useEffect } from 'react';
import './SideBar.css'

export default function SideBar({isOpen , onClose}){

    useEffect(() => {
        if(!isOpen) return;

        const handleKey = (e) => {
            if(e.key === "Escape") isClose();
        }

        document.addEventListener("keydown" , handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown" , handleKey);
            document.body.style.overflow = "";
        }
    } , [isOpen , onClose]);

    return(
        <div className={`sidebar-container-overlay ${isOpen && 'overlay-open'}`} onClick={onClose}>
            <div className={`modal-container ${isOpen && 'modal-open'}`} onClick={(e) => e.stopPropagation()}>
                <div className="sidebar-header">
                    <h3 className='sidebar-logo'>VENDORA</h3>
                    <span className='exit-sidebar' onClick={onClose}>X</span>
                </div>
                <nav className="nav-sidebar-container">
                    <ul className="nav-list">
                        <li className="nav-sidebar">
                            <IconSparkles stroke={2} size={20}/>
                            <a href="#">New arrivals</a>
                        </li>
                        <li className="nav-sidebar">
                            <IconShoppingBag stroke={2} size={20}/>
                            <a href="#">Shop</a>
                        </li>
                        <li className="nav-sidebar">
                            <IconCategory stroke={2} size={20}/>
                            <a href="#">Categories</a>
                        </li>
                        <li className="nav-sidebar">
                            <IconBrandAppgallery stroke={2} size={20}/>
                            <a href="#">Sell on Vendora</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}