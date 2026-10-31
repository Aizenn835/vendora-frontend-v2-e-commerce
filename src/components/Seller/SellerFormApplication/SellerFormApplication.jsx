import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import { Fragment } from 'react/jsx-runtime';
import './SellerFormApplication.css'

export default function SellerFormApplication(){

    const progress = [
        {count: 1 , text: "Your business"},
        {count: 2 , text: "Shop details"},
        {count: 3 , text: "Review"}
    ]

    return(
        <div className="seller-form-application-container">
            <div className="seller-form-application-inner-container">
                <div className="header-seller-form">
                    <p className='seller-form-supporting-primary-text'>Seller application</p>
                    <h1 className='seller-form-primary-text'>Let’s get to know your business</h1>
                    <p className='seller-form-supporting-text'>It takes about 5 minutes. We review every application within 2–3 business days.</p>
                </div>
                <div className="progress-indicator-container-seller-form">
                    {progress.map((step , index) => {
                        return(
                            <Fragment key={step.count}>
                                <ProgressIndicator progressCount={step.count} text={step.text}/>
                                {index < progress.length - 1 && (
                                    <div className="divider-seller-form"></div>
                                )}
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}