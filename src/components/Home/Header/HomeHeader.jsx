import { IconSearch , IconShoppingBag , IconMenu2 , IconUser } from '@tabler/icons-react';
import {validateToken} from '../../../utils/validator.jsx'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './HomeHeader.css'



export default function HomeHeader({onMenuClick , onSettingsClick}){

    const navigate = useNavigate();
    const [ isLogin ] = useState(validateToken()); // add a setter if needed.

    return(
        <div className="home-header-container">
            <div className="lower-header">
                <IconMenu2 stroke={2} className='mobile-view' onClick={onMenuClick}/>
                <h3 className='home-header-logo'>VENDORA</h3>
                <nav className="list-container">
                    <ul className='inner-list'>
                        <li><a href="#">New arrivals</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Sell on Vendora</a></li>
                    </ul>
                </nav>
                <div className="home-header-clickable">
                    <IconSearch stroke={2} size={20} className='remove-if-mobile'/>
                    <IconShoppingBag stroke={2} size={20} className='remove-if-mobile'/>
                    {isLogin ?
                        <IconUser stroke={2} size={20} className={`${isLogin ? 'clickable-user-icon' : ''}`} onClick={onSettingsClick}/> : 
                        <button className="auth-btn" onClick={() => {navigate('/login')}}>Log in</button>} 
                </div> 
            </div>
        </div>
    );
}