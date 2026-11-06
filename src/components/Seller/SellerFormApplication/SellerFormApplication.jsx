import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import SellerBusinessInfo from '../SellerBusinessInfo/SellerBusinessInfo.jsx'
import AboutYourShop from '../AboutYourShop/AboutYourShop.jsx';
import ReviewSellerInfo from '../ReviewSellerInfo/ReviewSellerInfo.jsx';
import './SellerFormApplication.css'
import { useState, useEffect } from 'react';

const forms = [
    { key: "businessInfo", label: "Your business" },
    { key: "aboutYourShop", label: "Shop Details" },
    { key: "reviewInfo", label: "Review" }
];

const initialData = {
    businessInfo: { email: "", phoneNumber: "", shopName: "" },
    aboutYourShop: { sellerCategory: "", websiteLink: "", description: "" }
}

const getSavedForm = () => {
    const saved = Number(sessionStorage.getItem("sellerFormStep"));
    return Number.isInteger(saved) && saved >= 0 && saved < forms.length ? saved : 0;
};

const getSavedData = () => {
    try {
        const saved = sessionStorage.getItem("sellerFormData");
        return saved ? JSON.parse(saved) : initialData;
    } catch {
        return initialData;
    }
};

export default function SellerFormApplication() {

    const [currentForm, setCurrentForm] = useState(getSavedForm);
    const [data, setData] = useState(getSavedData);

    useEffect(() => {
        sessionStorage.setItem("sellerFormStep", currentForm);
    }, [currentForm]);

    useEffect(() => {
        sessionStorage.setItem("sellerFormData", JSON.stringify(data));
    }, [data]);

    const update = (section, values) => {
        setData((prev) => ({
            ...prev,
            [section]: { ...prev[section], ...values }
        }));
    }

    const goNext = () => setCurrentForm((prev) => Math.min(prev + 1, forms.length - 1));
    const goBack = () => setCurrentForm((prev) => Math.max(prev - 1, 0));

    const clearApplication = () => {
        setData(initialData);
        setCurrentForm(0);
    }

    const renderForms = () => {
        switch (forms[currentForm].key) {
            case "businessInfo":
                return <SellerBusinessInfo
                    data={data.businessInfo}
                    onNext={goNext}
                    onSave={(values) => update("businessInfo", values)}
                />
            case "aboutYourShop":
                return <AboutYourShop
                    data={data.aboutYourShop}
                    onNext={goNext}
                    onBack={goBack}
                    onSave={(values) => update("aboutYourShop", values)}
                />
            case "reviewInfo":
                return <ReviewSellerInfo
                    data={data}
                    onBack={goBack}
                    onSuccess={clearApplication}
                />
            default:
                return null;
        }
    }

    return (
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
                    <ProgressIndicator progressCount={2} text={"Shop details"} />
                    <div className="divider-seller-form"></div>
                    <ProgressIndicator progressCount={3} text={"Review"} />
                </div>
                {renderForms()}
                <footer className="footer-outside-form-container">
                    <span>Your information is private and never shared without your permission.</span>
                </footer>
            </div>
        </div>
    );
}