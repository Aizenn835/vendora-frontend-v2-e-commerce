import './AboutYourShop.css'
import FormHeader from '../FormHeader/FormHeader'
import SellerFormInput from '../SellerFormInput/SellerFormInput'
import { IconArrowRight } from '@tabler/icons-react'
import { useState } from 'react'
import { sellerCategories } from '../../shared/SellerCategories'

const placeholders = [
    "What do you make, and what makes it special?",
    "What’s the story behind your shop?",
    "How would you describe your shop in one sentence?"
]

export default function AboutYourShop({ onNext, onBack, data, onSave }) {

    const [currentPlaceholder] = useState(
        () => placeholders[Math.floor(Math.random() * placeholders.length)]
    )

    const [form, setForm] = useState(data)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleDescription = () => {
        const desc = form.description;
        const length = desc.length;
        length.slice(0,100);
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
                        />
                    </div>
                    <div className="description-about-your-shop-container">
                        <p className='identifier-text-about-your-shop'>Tell us your brand story</p>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                            maxLength={500}
                            placeholder={currentPlaceholder}
                            className='description-input'
                        />
                    </div>
                    <span className="counter-text-desc-about-your-shop">{form.description.length}/100</span>
                    <div className="divider-about-your-shop"></div>
                    <div className="footer-btn-about-your-shop">
                        <button className="back-about-your-shop" type='button' onClick={onBack}>Back</button>
                        <button className="continue-about-your-shop" type='submit'>
                            <span className="continue-about-your-shop-text">Continue</span>
                            <IconArrowRight stroke={2} size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}