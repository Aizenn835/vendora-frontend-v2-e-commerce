import FormLogin from '../FormLogin/FormLogin.jsx'
import OAuth from '../OAuth/OAuth.jsx'
import { useState } from 'react'
import './RightCard.css'


export default function RightCard(){

    const [activeForm , setActiveForm] = useState("login");

    const formContent = {
        login: {
            header: "Welcome back" ,
            supportingHeader: "Sign in to your account to continue." ,
            checkboxText : "Remember me for 30 days",
            buttonText : "Sign in",
            separatorText : "or continue with" ,
            footerText : "Don't have an account?",
            underlineText : "Create one"
        },
        signUp: {
            header: "Create account",
            supportingHeader: "It's free and only takes a minute.",
            checkboxText:{
                firstText: "I agree to the",
                secondText: "Terms of Service",
                thirdText: "and",
                fourthText: "Privacy Policy"
            },
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
                <FormLogin checkboxText={current.checkboxText} buttonText={current.buttonText}/>
                <div className="separator-container">
                    <div className="separator-login"></div>
                    <span className='separator-text'>{current.separatorText}</span>
                    <div className="separator-login"></div>
                </div>
                <OAuth />
            </div>
        </div>
    );
}