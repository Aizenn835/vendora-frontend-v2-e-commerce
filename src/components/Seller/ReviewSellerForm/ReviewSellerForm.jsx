import './ReviewSellerForm.css'

export default function ReviewSellerForm({header , info , subInfo}){
    return(
        <div className="form-container">
            <h5 className='form-container-header'>{header}</h5>
            <div className="form-outer-container-review-seller">
                <div className="left-review-form-container">
                    <p className='info-form-container-text'>{info}</p>
                    <span className='sub-info-form-container-text'>{subInfo}</span>
                </div>
                <span className="right-edit-text-review-info">Edit</span>
            </div>
        </div>
    );
}