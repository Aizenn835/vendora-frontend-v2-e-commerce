import SellerHeader from '../SellerHeader/SellerHeader';
import SellerStatusContent from '../SellerStatusContent/SellerStatusContent';
import './SellerStatus.css'

export default function SellerModalApproveDenied(){
    return(
        <div className="seller-approve-container">
            <SellerHeader />
            <SellerStatusContent />
        </div>
    );
}