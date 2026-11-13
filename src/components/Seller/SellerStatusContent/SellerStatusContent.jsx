import './SellerStatus.css'
import { IconCheck } from '@tabler/icons-react';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import { useNavigate } from 'react-router-dom';


export default function SellerStatusContent(){
    const navigate = useNavigate();

    return(
        <div className="seller-status-content-container">
            <div className="seller-status-inner-content-container">
                <IconCheck stroke={1.70} size={40} className='checkmark-seller-status-content'/>
                <p className='seller-application-text'>Seller Application</p>
                <h1 className='application-seller-status-text'>Application submitted</h1>
                <p className='application-seller-status-supporting-text'>Thank you for applying to sell on Vendora. Our team will review your shop details, and you can check this page for updates on your application status.</p>
                <div className="progress-seller-status">
                    <ProgressIndicator progressCount={1} text={'Submitted'}/>
                    <div className={`divider-seller-status`}></div>
                    <ProgressIndicator progressCount={2} text={'Under review'}/>
                    <div className={`divider-seller-status`}></div>
                    <ProgressIndicator progressCount={3} text={'Approved'}/>
                </div>
                <div className="seller-status-info-container">
                    <div className="seller-status-info-inner-container">
                        <h5 className="seller-status-info-text">Shop name</h5>
                        <p className='seller-status-info-value'>Vendora</p>
                    </div>
                    <div className="seller-status-info-inner-container">
                        <h5 className="seller-status-info-text">Category</h5>
                        <p className='seller-status-info-value'>Fashion</p>
                    </div>
                    <div className="seller-status-info-inner-container">
                        <h5 className="seller-status-info-text">Status</h5>
                        <p className='pending-status-seller-status'>PENDING</p>
                    </div>
                </div>
                <div className="seller-status-buttons">
                    <button className="seller-status-btn back-to-home-seller-status" onClick={() => navigate('/')}>Back to home</button>
                    <button className="seller-status-btn browse-prod-seller-status">Browse products</button>
                </div>
            </div>
        </div>
    );
}