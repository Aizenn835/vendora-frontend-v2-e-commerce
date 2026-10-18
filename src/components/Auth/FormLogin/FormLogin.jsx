import { IconEye , IconEyeOff , IconCircleDashedCheck , IconCircleX , IconCircleCheck} from '@tabler/icons-react'
import { login } from '../../../api/auth'
import { validateEmail } from '../../../utils/validator'
import '../../shared/FormLogin.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useState } from 'react'


export default function FormLogin({buttonText}){
    const [isPasswordShown , setIsPasswordShown] = useState(false);
    const [emailInput , setEmailInput] = useState("");
    const [passwordInput , setPasswordInput] = useState("");

    const email = emailInput.trim();

    const isEmailValid = validateEmail(email);
    const password = passwordInput.trim();

    const hasMinLength = password.length >= 8;
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

    const [isLoading , setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        if(isLoading) return;

        if( !isEmailValid || !hasMinLength || !hasNumberOrSymbol){
            const message = "Invalid input. Please check the requirements and try again.";
            toast.error(message);
            return;
        }

        try {
            const response = await login({
                email: email,
                password: passwordInput
            });
            const token = response.data?.token;
            if(token){localStorage.setItem('Token' , token);}
            
            navigate("/");
            toast.success("Account successfully created.");
        } catch(err) {
            const message = err.response?.data?.message ?? "Registration failed. Please try again.";
            toast.error(message);
        } finally {
            setIsLoading(false);
        }

    }



    return(
        <form className='auth-form' onSubmit={handleLogin}>
            <div className="form">
                <p className='form-text'>Email Address</p>
                <div className="inner-input-container">
                    <input type="text" placeholder='you@example.com' className='email-input' onChange={(e) => setEmailInput(e.target.value)}/>
                    {emailInput.length > 0 && (
                        isEmailValid ? 
                        (<IconCircleDashedCheck stroke={2} size={18} className='valid'/>) : 
                        (<IconCircleX stroke={2} size={18} className='invalid'/>)
                    )}
                </div>
            </div>
            <div className="form">
                <div className="password-form-container">
                    <p className='form-text'>Password</p>
                    <a href='' className='forgot-password'>Forgot Password?</a>
                </div>
                <div className="inner-input-container">
                    <input type={isPasswordShown ? "text" : "password"} placeholder='Enter your password' onChange={(e) => setPasswordInput(e.target.value)}/>
                   
                    {isPasswordShown ? 
                    <IconEye stroke={2} size={18} onClick={() => setIsPasswordShown(false)} className='svg-log-in'/> : 
                    <IconEyeOff stroke={2} size={18} onClick={() => setIsPasswordShown(true)} className='svg-log-in'/>
                    }
                </div>
                <div className="footer-password-outer-container">
                    <div className={`password-footer-container ${hasMinLength ? "accepted" : ""}`}>
                        <IconCircleCheck stroke={2} size={15}/>
                        <p>Must be at least 8 characters</p>
                    </div>
                    <div className={`password-footer-container ${hasNumberOrSymbol ? "accepted" : ""}`}>
                        <IconCircleCheck stroke={2} size={15}/>
                        <p>Must contain at least one number or symbol</p>
                    </div>
                </div>
            </div>
            <button className="submit-form" type='submit'>{buttonText}</button>
        </form>
    );
}