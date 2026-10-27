import SellerHeader from './SellerHeader/SellerHeader';
import SellerHero from './SellerHero/SellerHero';
import './Seller.css'

export default function Seller(){
    return(
        <div className="seller-page-container">
            <SellerHeader />
            <SellerHero />
        </div>
    );
}