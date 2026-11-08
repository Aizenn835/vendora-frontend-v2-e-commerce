import './SellerBusinessInfo.css'
import '../../shared/SellerForms.css'
import SellerFormInput from '../SellerFormInput/SellerFormInput'
import FormHeader from '../FormHeader/FormHeader'
import { IconArrowRight } from '@tabler/icons-react'
import { validateBusinessInfo } from '../../../utils/validator.jsx'
import { useState } from 'react'

export default function SellerBusinessInfo({ data, onNext, onSave }) {
    const [form, setForm] = useState(data);
    const [isButtonDisabled , setIsButtonDisabled] = useState(false);
    const [error , setError] = useState({
        email: "",
        phoneNumber: "",
        shopName: ""
    });

    const handleChange = (e) => {
        const object = e.target.name;
        const value = e.target.value;
        const currentError = {...error};

        if(value.trim() === ""){
            currentError[object] = "";
            setIsButtonDisabled(true);
        }else{
            const isValid = validateBusinessInfo(object , value);

            if(!isValid){
                currentError[object] = "Please enter a valid input";
                setIsButtonDisabled(true);
            }
            else{
                currentError[object] = "";
                setIsButtonDisabled(false);
            }
        }
        setError(currentError);
        setForm({ ...form, [object]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
        onNext();
    }

    return (
        <div className="form-seller-form-container">
            <div className="inner-seller-form-container">
                <FormHeader primary={'About you'} secondary={'Step 1 of 3'} supportingText={'First, tell us who we’ll be working with.'} />
                <form onSubmit={handleSubmit}>
                    <div className="form-grid-seller">
                        <div className="form-inner-grid-seller">
                            <SellerFormInput
                                identifierInput={'Work email'}
                                placeholder={'example@business.com'}
                                name={'email'}
                                value={form.email}
                                onChange={handleChange}
                                error={error.email}
                            />
                            <SellerFormInput
                                identifierInput={'Phone number'}
                                placeholder={'09171234567'}
                                name={'phoneNumber'}
                                value={form.phoneNumber}
                                onChange={handleChange}
                                error={error.phoneNumber}
                            />
                        </div>
                        <SellerFormInput
                            identifierInput={'Business name'}
                            placeholder={'Your brand or shop'}
                            name={'shopName'}
                            value={form.shopName}
                            onChange={handleChange}
                            error={error.shopName}
                        />
                    </div>
                    <div className="divider-seller-form footer-divider-seller-form"></div>
                    <div className="btn-container-seller-form">
                        <button className="continue-seller-business-info" type='submit' disabled={isButtonDisabled}>
                            <span className="continue-business-form-text">Continue</span>
                            <IconArrowRight stroke={2} size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}