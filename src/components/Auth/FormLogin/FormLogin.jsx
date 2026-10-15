import { IconEye , IconCircleDashedCheck } from '@tabler/icons-react';
import './FormLogin.css'


export default function FormLogin({checkboxText , buttonText}){
    return(
        <form className='auth-form'>
            <div className="form">
                <p className='form-text'>Email Address</p>
                <div className="inner-input-container">
                    <input type="text" placeholder='you@example.com' className='email-input'/>
                    <IconCircleDashedCheck stroke={2} size={18} />
                </div>
            </div>
            <div className="form">
                <div className="password-form-container">
                    <p className='form-text'>Password</p>
                    <span className='forgot-password'>Forgot Password?</span>
                </div>
                <div className="inner-input-container">
                    <input type="password" placeholder='Enter your password'/>
                    <IconEye stroke={2} size={18} />
                </div>
            </div>
            <div className="checkbox-container-auth">
                <input type="checkbox" />
                <span>{checkboxText}</span>
            </div>
            <button className="submit-form">{buttonText}</button>
        </form>
    );
}