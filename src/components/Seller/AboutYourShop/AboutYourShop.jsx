import './AboutYourShop.css'
import FormHeader from '../FormHeader/FormHeader'
import SellerFormInput from '../SellerFormInput/SellerFormInput'
import { IconArrowRight } from '@tabler/icons-react'
import { useState } from 'react'

const placeholders = [
    "What do you make, and what makes it special?",
    "What’s the story behind your shop?",
    "How would you describe your shop in one sentence?"
]

export default function AboutYourShop({onNext , onBack}) {

    const [currentPlaceholder] = useState(
        () => placeholders[Math.floor(Math.random() * placeholders.length)]
    )
    const [category , setCategory] = useState("");
    const [descriptionText , setDescriptionText] = useState("");

    const handleDescription = (e) => {
        setDescriptionText(e.target.value.slice(0, 500));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                            <select name="product-category" id="product-category-id" className="product-category-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
                                <option value="" disabled>Select a category</option>
                                <option value="Home & Living">Home & Living</option>
                                <option value="Clothing & Accessories">Clothing & Accessories</option>
                                <option value="Beauty & Wellness">Beauty & Wellness</option>
                                <option value="Food & Drink">Food & Drink</option>
                                <option value="Art & Stationery">Art & Stationery</option>
                            </select>
                        </div>
                        <SellerFormInput identifierInput={'Website or social link'} placeholder={'https://'} />
                    </div>
                    <div className="description-about-your-shop-container">
                        <p className='identifier-text-about-your-shop'>Tell us your brand story</p>
                        <textarea required maxLength={100} value={descriptionText} placeholder={currentPlaceholder} className='description-input' onChange={handleDescription}/>
                    </div>
                    <span className="counter-text-desc-about-your-shop">{descriptionText.length}/500</span>
                    <div className="divider-about-your-shop"></div>
                    <div className="footer-btn-about-your-shop">
                        <button className="back-about-your-shop" type='button' onClick={onBack}>Back</button>
                        <button className="continue-about-your-shop" type='submit'>
                            <span className="continue-about-your-shop-text" >Continue</span>
                            <IconArrowRight stroke={2} size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}