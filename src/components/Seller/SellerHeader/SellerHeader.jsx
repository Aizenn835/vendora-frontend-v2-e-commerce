import {validateToken } from '../../../utils/validator.jsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { IconUser , IconSettings } from '@tabler/icons-react'
import './SellerHeader.css'

export default function SellerHeader(){
    const [isSignUp , setIsSignUp] = useState(validateToken);
    const navigate = useNavigate();


    return(
        <div className="seller-header-container">
            <div className="seller-header-inner-container">
                <h3>VENDORA</h3>
                <div className="sign-in-btn-seller-header-container">
                    {isSignUp ?
                    <>
                        <IconUser stroke={2} size={20}/>
                        <IconSettings stroke={2} size={20} />
                    </>
                     : 
                    <>
                        <p className='sign-in-seller-header-text'>Already selling with us?</p>
                        <button className='sign-in-btn-seller-header' onClick={() => {navigate('/login')}}>Sign in</button>
                    </>
                    }
                </div>
            </div>
        </div>
    );
}