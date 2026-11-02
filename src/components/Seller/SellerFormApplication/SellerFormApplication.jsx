import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import SellerBusinessInfo from '../SellerBusinessInfo/SellerBusinessInfo.jsx'
import './SellerFormApplication.css'
import { useState } from 'react';

export default function SellerFormApplication(){
    

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
                <SellerBusinessInfo />
                <footer className="footer-outside-form-container">
                    <span>Your information is private and never shared without your permission.</span>
                </footer> 
            </div>
        </div>
    );
}