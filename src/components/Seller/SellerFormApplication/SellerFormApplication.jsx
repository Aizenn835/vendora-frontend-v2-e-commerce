import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import { IconArrowRight } from '@tabler/icons-react'
import { validateEmail , validateName } from '../../../utils/validator.jsx'
import './SellerFormApplication.css'
import { useState } from 'react';

export default function SellerFormApplication(){
    const [step , setStep] = useState(1);
    const [fullname , setFullname] = useState("");
    const [workEmail , setWorkEmail] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [businessName , setBusinessName] = useState("");

    const validateEmail = validateEmail(workEmail);
    const validateFullname = validateName(fullname);


    const handleStep = () => {
        if(step >= 3) return;
        setStep(step + 1);
    }

    return(
        <div className="seller-form-application-container">
            <div className="seller-form-application-inner-container">
                <div className="header-seller-form">
                    <p className='seller-form-supporting-primary-text'>Seller application</p>
                    <h1 className='seller-form-primary-text'>Let’s get to know your business</h1>
                    <p className='seller-form-supporting-text'>It takes about 5 minutes. We review every application within 2–3 business days.</p>
                </div>
                <div className="progress-indicator-container-seller-form">
                    <ProgressIndicator progressCount={1} text={"Your business"} />
                    <div className="divider-seller-form"></div>
                    <ProgressIndicator progressCount={2} text={"Shop details"}/>
                    <div className="divider-seller-form"></div>
                    <ProgressIndicator progressCount={3} text={"Review"}/>
                </div>
                <div className="form-seller-form-container">
                    <div className="inner-seller-form-container">
                        <div className="seller-form-header">
                            <div className="primary-seller-form-header-text-container">
                                <h3>About you</h3>
                                <span className='steps-text'>Step {step} of 3</span>
                            </div>
                            <p>First, tell us who we'll working with.</p>
                        </div>
                        <form>
                            <div className="form-grid-seller">
                                <div className="input-identifier-container">
                                    <p className="identifier-text">Full name</p>
                                    <input type="text" required placeholder='Your full name' className='input-form-grid-seller'/>
                                </div>
                                <div className="input-identifier-container">
                                    <p className="identifier-text">Work Email</p>
                                    <input type="text" required placeholder='example@gmail.com' className='input-form-grid-seller'/>
                                </div>
                                <div className="input-identifier-container">
                                    <p className="identifier-text">Phone number</p>
                                    <input type="text" required placeholder='+63 917 123 4567' className='input-form-grid-seller'/>
                                </div>
                                <div className="input-identifier-container">
                                    <p className="identifier-text">Business name</p>
                                    <input type="text" required placeholder='Your brand or shop' className='input-form-grid-seller' onChange={(e) => setBusinessName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="divider-seller-form footer-divider-seller-form"></div>
                            <div className="btn-container-seller-form">
                                <div className="inner-btn-container-seller-form">
                                    <button className="continue-btn-seller-form" onClick={handleStep}>Continue</button>
                                    <IconArrowRight stroke={2} size={20} />
                                </div>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    );
}