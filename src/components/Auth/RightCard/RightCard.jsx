import FormLogin from '../FormLogin/FormLogin.jsx'
import FormSignUp from '../FormLogin/FormSignUp.jsx'
import OAuth from '../OAuth/OAuth.jsx'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './RightCard.css'


export default function RightCard(){
    const location = useLocation();
    
    const currentForm = location.state?.targetForm || 'login';
    const [activeForm , setActiveForm] = useState(currentForm);

    const formContent = {
        login: {
            header: "Welcome back" ,
            supportingHeader: "Sign in to your account to continue." ,
            buttonText : "Sign in",
            separatorText : "or continue with" ,
            footerText : "Don't have an account?",
            underlineText : "Create one"
        },
        signUp: {
            header: "Create account",
            supportingHeader: "It's free and only takes a minute.",
            buttonText: "Create Account",
            separatorText: "or sign up with",
            footerText: "Already have an account?",
            underlineText: "Sign in"
        }
    };
    
    const current = formContent[activeForm];

    return(
        <div className="right-card-container">
            <div className="right-card-inner-container">
                <div className="right-card-header">
                    <h1 className='auth-header'>{current.header}</h1>
                    <p className='auth-supporting-text'>{current.supportingHeader}</p>
                </div>
                {activeForm === "login" ? 
                 <FormLogin buttonText={current.buttonText}/> :
                 <FormSignUp buttonText={current.buttonText} />
                }
                <div className="separator-container">
                    <div className="separator-login"></div>
                    <span className='separator-text'>{current.separatorText}</span>
                    <div className="separator-login"></div>
                </div>
                <OAuth />
                <footer className="sign-create-option">
                    <p className='footer-text-right-card'>
                        {current.footerText} 
                        <span className='footer-bold-text' onClick={() => setActiveForm(activeForm === "login" ? "signUp" : "login")}>{current.underlineText}</span>
                    </p>
                </footer>
            </div>
        </div>
    );
}