import './ReviewSellerForm.css'

export default function ReviewSellerForm({header , info , subInfo}){
    return(
        <div className="form-container">
            <h5>{header}</h5>
            <div className="form-outer-container-review-seller">
                <div className="left-review-form-container">
                    <p>{info}</p>
                    <span>{subInfo}</span>
                </div>
                <span className="right-edit-text-review-info">Edit</span>
            </div>
        </div>
    );
}