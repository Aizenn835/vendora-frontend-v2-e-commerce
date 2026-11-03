import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import SellerBusinessInfo from '../SellerBusinessInfo/SellerBusinessInfo.jsx'
import AboutYourShop from '../AboutYourShop/AboutYourShop.jsx';
import './SellerFormApplication.css'
import { useState, useEffect } from 'react';

const forms = [
    {key: "businessInfo" , label: "Your business"},
    {key: "aboutYourShop" , label: "Shop Details"},
    {key: "reviewInfo" , label: "Review"}
];

const getSavedForm = () => {
    const saved = Number(localStorage.getItem("sellerFormStep"));
    return Number.isInteger(saved) && saved >= 0 && saved < forms.length ? saved : 0;
};

export default function SellerFormApplication(){

    const [currentForm , setCurrentForm] = useState(getSavedForm);

    useEffect(() => {
        localStorage.setItem("sellerFormStep" , currentForm);
    }, [currentForm]);

    const goNext = () => setCurrentForm((prev) => Math.min(prev + 1 , forms.length - 1));
    const goBack = () => setCurrentForm((prev) => Math.max(prev - 1 , 0));

    const renderForms = () => {
        switch(forms[currentForm].key){
            case "businessInfo":
                return <SellerBusinessInfo onNext={goNext}/>
            case "aboutYourShop":
                return <AboutYourShop onNext={goNext} onBack={goBack}/>
            default: 
                return null;    
        }
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
                {renderForms()}
                <footer className="footer-outside-form-container">
                    <span>Your information is private and never shared without your permission.</span>
                </footer> 
            </div>
        </div>
    );
}