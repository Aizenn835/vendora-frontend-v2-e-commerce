import FormHeader from '../FormHeader/FormHeader'
import ReviewSellerForm from '../ReviewSellerForm/ReviewSellerForm'
import { IconArrowRight } from '@tabler/icons-react'
import { apply } from '../../../api/seller'
import { sellerCategories } from '../../shared/SellerCategories'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ReviewSellerInfo.css'

export default function ReviewSellerInfo({ onBack, data, onSuccess }) {

    const [agreed, setAgreed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const categoryLabel = sellerCategories.find(
        (category) => category.value === data.aboutYourShop.sellerCategory
    )?.label;

    const submitForm = async () => {
        if (isLoading) return;

        setIsLoading(true);

        try {
            const response = await apply({
                ...data.businessInfo,
                ...data.aboutYourShop
            });
            onSuccess();
            navigate("/");
            localStorage.removeItem('sellerFormStep');
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="review-seller-info-container">
            <div className="inner-review-seller-info-container">
                <FormHeader primary={'Review your details'} secondary={'Step 3 of 3'} supportingText={'Make sure everything looks right before applying.'} />
                <div className="form-container-review-seller">
                    <ReviewSellerForm header={'Contact'} info={data.businessInfo.email} subInfo={data.businessInfo.phoneNumber} />
                    <ReviewSellerForm header={'Business'} info={data.businessInfo.shopName} subInfo={data.aboutYourShop.websiteLink} />
                    <ReviewSellerForm header={'Shop Category'} info={categoryLabel} subInfo={data.aboutYourShop.description} />
                </div>
                <div className="seller-terms-container">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                    <p className="seller-terms-text">I confirm that the information provided is accurate and agree to the seller <a href="#" className='bold-text-seller-terms-text'>seller terms</a></p>
                </div>
                <div className="divider-review-seller"></div>
                <div className="footer-btn-review-seller-info">
                    <button className="back-review-seller" type='button' onClick={onBack}>Back</button>
                    <button className="continue-review-seller" type='button' onClick={submitForm} disabled={!agreed || isLoading}>
                        <span className="continue-review-seller-text">{isLoading ? "Submitting..." : "Continue"}</span>
                        <IconArrowRight stroke={2} size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}