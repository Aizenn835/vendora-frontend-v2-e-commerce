import { IconSearch , IconUser , IconShoppingBag , IconMenu2 } from '@tabler/icons-react';
import './HomeHeader.css'
import { useState } from 'react';

export default function HomeHeader(){
    const [isNavOpen , setIsNavOpen] = useState(false);

    return(
        <div className="home-header-container">
            <div className="upper-header">
                <h3 className='upper-header-text'>Get a welcome coupon on your first purchase!</h3>
            </div>
            <div className="lower-header">
                <IconMenu2 stroke={2} className='mobile-view' onClick={() => setIsNavOpen(true)}/>
                <h3 className='home-header-logo'>VENDORA</h3>
                <nav className="list-container">
                    <ul className='inner-list'>
                        <li><a href="#">New in</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">The edit</a></li>
                        <li><a href="#">Our story</a></li>
                    </ul>
                </nav>
                <div className="home-header-clickable">
                    <IconSearch stroke={2} size={20} className='remove-if-mobile'/>
                    <IconShoppingBag stroke={2} size={20} className='remove-if-mobile'/>
                    <button className="auth-btn">Log in</button>
                </div> 
            </div>
        </div>
    );
}