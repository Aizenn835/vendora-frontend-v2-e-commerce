import './SellerStatus.css'
import { IconCheck } from '@tabler/icons-react';

export default function SellerStatusContent(){
    return(
        <div className="seller-status-content-container">
            <div className="seller-status-inner-content-container">
                <IconCheck stroke={1.70} size={40} className='checkmark-seller-status-content'/>
                <p className='seller-application-text'>Seller Application</p>
                <h1 className='application-seller-status-text'>Application submitted</h1>
                <p className='application-seller-status-supporting-text'>Thank you for applying to sell on Vendora. Our team will review your shop details, and you can check this page for updates on your application status.</p>
            </div>
        </div>
    );
}