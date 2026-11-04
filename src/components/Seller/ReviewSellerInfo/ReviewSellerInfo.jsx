import FormHeader from '../FormHeader/FormHeader';
import ReviewSellerForm from '../ReviewSellerForm/ReviewSellerForm';
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
                </form>
            </div>
       </div>
    );
}