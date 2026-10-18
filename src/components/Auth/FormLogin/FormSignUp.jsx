import { IconEye , IconEyeOff , IconCircleDashedCheck , IconCircleX , IconCircleCheck} from '@tabler/icons-react'
import LoadingAnimation from '../../shared/LoadingAnimation/LoadingAnimation'
import { validateEmail , validateName } from '../../../utils/validator'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signUp } from '../../../api/auth'
import '../../shared/FormLogin.css'
import toast from 'react-hot-toast'

export default function FormSignUp({buttonText}){
    const [isPasswordShown , setIsPasswordShown] = useState(false);

    const [emailInput , setEmailInput] = useState("");
    const [passwordInput , setPasswordInput] = useState("");
    const [firstnameInput , setFirstnameInput] = useState("");
    const [lastnameInput , setLastnameInput] = useState("");

    const isEmailValid = validateEmail(emailInput.trim());
    const isFirstNameValid = validateName(firstnameInput.trim());
    const isLastNameValid = validateName(lastnameInput.trim());

    const hasMinLength = passwordInput.length >= 8;
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

    const [isLoading , setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(isLoading) return;

        if(!isEmailValid || !isFirstNameValid || !isLastNameValid || !hasMinLength || !hasNumberOrSymbol){
            const message = "Invalid input. Please check the requirements and try again.";
            toast.error(message);
            return;
        }

        setIsLoading(true);

        try {
           const response = await signUp({firstname: firstnameInput.trim(),
                                          lastname: lastnameInput.trim(),
                                          email: emailInput.trim(),
                                          password: passwordInput
           });

           const token = response.data?.token;
           if(token){localStorage.setItem('Token', token);}
           
           toast.success("Account successfully created.");
           navigate("/");
      
        } catch (err) {
            const message = err.response?.data?.message || "Registration failed. Please try again.";
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <form className='auth-form' onSubmit={handleSubmit}>
            <div className="form-box">
                <div className="grid-form">
                    <p className='form-text'>First name</p>
                    <div className="inner-input-container">
                        <input type="text" placeholder='juan' required className='grid-form-input' onChange={(e) => setFirstnameInput(e.target.value)}/>
                        {firstnameInput.trim().length > 0 && (
                         isFirstNameValid ? 
                        (<IconCircleDashedCheck stroke={2} size={18} className='valid'/>) : 
                        (<IconCircleX stroke={2} size={18} className='invalid'/>))}
                    </div>
                </div>
                <div className="grid-form">
                    <p className='form-text'>Last name</p>
                    <div className="inner-input-container">
                        <input type="text" placeholder='cruz' required className='grid-form-input' onChange={(e) => setLastnameInput(e.target.value)}/>
                        {lastnameInput.trim().length > 0 &&(
                         isLastNameValid ? 
                        (<IconCircleDashedCheck stroke={2} size={18} className='valid'/>) : 
                        (<IconCircleX stroke={2} size={18} className='invalid'/>))}
                    </div>
                </div>
            </div>
            <div className="form">
                <p className='form-text'>Email Address</p>
                <div className="inner-input-container">
                    <input type="text" placeholder='juan@example.com' required className='email-input' onChange={(e) => setEmailInput(e.target.value)}/>
                    {emailInput.trim().length > 0 && (
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
                    <input type={isPasswordShown ? "text" : "password"} required placeholder='Min. 8 characters' onChange={(e) => setPasswordInput(e.target.value)}/>
                   
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
            <button className="submit-form" type='submit' disabled={isLoading}>
                {isLoading ? <LoadingAnimation /> : buttonText }
            </button>
        </form>
    );
}