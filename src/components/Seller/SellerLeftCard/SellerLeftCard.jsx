import SellerApplicationCircle from '../SellerApplicationCircle/SellerApplicationCircle';
import { IconSparkles2 } from '@tabler/icons-react'
import './SellerLeftCard.css'

export default function SellerLeftCard(){
    return(
        <div className="seller-left-card-container">
            <SellerApplicationCircle />
            <div className="seller-left-card-inner-container">
                <div className="seller-eyebrow-card-container">
                    <IconSparkles2 stroke={2} size={15} />
                    <p>Sell with us</p>
                </div>
            </div>
        </div>
    );
}