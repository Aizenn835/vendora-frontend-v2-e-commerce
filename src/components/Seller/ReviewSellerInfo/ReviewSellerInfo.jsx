import FormHeader from '../FormHeader/FormHeader';
import ReviewSellerForm from '../ReviewSellerForm/ReviewSellerForm';
import { IconArrowRight } from '@tabler/icons-react'
import './ReviewSellerInfo.css'

export default function ReviewSellerInfo(){

    return(
       <div className="review-seller-info-container">
            <div className="inner-review-seller-info-container">
                <FormHeader primary={'Review your details'} secondary={'Step 3 of 3'} supportingText={'Make sure everything looks right before applying.'}/>
                <form>
                    <div className="form-container-review-seller">
                        <ReviewSellerForm header={'Contact'} info={'Lei Justine Clemente'} subInfo={'example@gmail.com'}/>
                        <ReviewSellerForm header={'Business'} info={'Vendora'} subInfo={'9333674248'}/>
                        <ReviewSellerForm header={'Shop Category'} info={'Home & Living'} subInfo={'https://example.com'}/>
                    </div>
                    <div className="seller-terms-container">
                        <input type="checkbox" required/>
                        <p className="seller-terms-text">I confirm that the information provided is accurate and agree to the seller <a href="#" className='bold-text-seller-terms-text'>seller terms</a></p>
                    </div>
                    <div className="divider-review-seller"></div>
                    <div className="footer-btn-review-seller-info">
                        <button className="back-review-seller" type='button'>Back</button>
                        <button className="continue-review-seller" type='submit'>
                            <span className="continue-review-seller-text" >Continue</span>
                            <IconArrowRight stroke={2} size={20} />
                        </button>
                    </div>
                </form>
            </div>
       </div>
    );
}