import './AboutYourShop.css'
import FormHeader from '../FormHeader/FormHeader'
import SellerFormInput from '../SellerFormInput/SellerFormInput'
import { IconArrowRight } from '@tabler/icons-react'
import { useState } from 'react'
import { sellerCategories } from '../../shared/SellerCategories'
import { validateAboutYourShop } from '../../../utils/validator.jsx'

const placeholders = [
    "What do you make, and what makes it special?",
    "What’s the story behind your shop?",
    "How would you describe your shop in one sentence?"
]

export default function AboutYourShop({ onNext, onBack, data, onSave }) {
    const [error , setError] = useState({
        websiteLink: "",
        description: ""
    });
    const [isButtonDisabled , setIsButtonDisabled] = useState(false);
    const [currentPlaceholder] = useState(
        () => placeholders[Math.floor(Math.random() * placeholders.length)]
    )

    const [form, setForm] = useState(data)

    const handleChange = (e) => {
        const object = e.target.name;
        const value = e.target.value;
        const currentError = {...error};

        if(value.trim() === ""){
            currentError[object] = "";
            setIsButtonDisabled(true);
        }else{
            const isValid = validateAboutYourShop(object , value);

            if(!isValid){
                currentError[object] = "Please enter a valid input";
                setIsButtonDisabled(true);
            }else{
                currentError[object] = "";
                setIsButtonDisabled(false);
            }
        }
        console.log();
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
                <FormHeader primary={'About your shop'} secondary={'Step 2 of 3'} supportingText={'Help us understand what you make and sell.'} />
                <form onSubmit={handleSubmit}>
                    <div className="forms-about-your-shop">
                        <div className="select-about-your-shop-container">
                            <p>Product Category</p>
                            <select
                                name="sellerCategory"
                                id="product-category-id"
                                className="product-category-select"
                                value={form.sellerCategory}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select a category</option>
                                {sellerCategories.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <SellerFormInput
                            identifierInput={'Website or social link'}
                            placeholder={'https://'}
                            name={'websiteLink'}
                            value={form.websiteLink}
                            onChange={handleChange}
                            error={error.websiteLink}
                        />
                    </div>
                    <div className="description-about-your-shop-container">
                        <p className='identifier-text-about-your-shop'>Tell us your brand story</p>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                            maxLength={400}
                            placeholder={currentPlaceholder}
                            className='description-input'
                        />
                    </div>
                    <span className="counter-text-desc-about-your-shop">{form.description.length}/400</span>
                    <div className="divider-about-your-shop"></div>
                    <div className="footer-btn-about-your-shop">
                        <button className="back-about-your-shop" type='button' onClick={onBack}>Back</button>
                        <button className="continue-about-your-shop" type='submit' disabled={isButtonDisabled}>
                            <span className="continue-about-your-shop-text">Continue</span>
                            <IconArrowRight stroke={2} size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}