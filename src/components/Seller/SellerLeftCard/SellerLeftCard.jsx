import SellerApplicationCircle from '../SellerApplicationCircle/SellerApplicationCircle';
import { IconSparkles2 , IconWorld , IconShieldCheck} from '@tabler/icons-react'
import './SellerLeftCard.css'

export default function SellerLeftCard(){

    const message = [
        {logo: IconWorld, primary: "Reach more people" , secondary: "Get discovered by thousands of conscious shoppers."},
        {logo: IconShieldCheck , primary: "Protected payments" , secondary: "Secure checkout and dependable seller payouts."},
        {logo: IconSparkles2 , primary: "Made to grow" , secondary: "Simple tools and real support at every stage."}
    ];

    return(
        <div className="seller-left-card-container">
            <SellerApplicationCircle />
            <div className="seller-left-card-inner-container">
                <div className="seller-eyebrow-card-container">
                    <IconSparkles2 stroke={2} size={15} />
                    <p>Sell with us</p>
                </div>
                <div className="eye-card-container">
                    <p>Your craft,</p>
                    <span>our community</span>
                </div>
                <div className="nose-card-container">
                    <p>Join a marketplace built for thoughtful brands. We help independent sellers find the customers who value what they make.</p>
                </div>    
                <div className="seller-left-three-card-container">
                    {message.map((card) => {
                        return( <div className="three-card-inner-container" key={card.primary}>
                                    <card.logo stroke={2} size={20} />
                                    <div className="card-seller-left-text-container">
                                        <p className="primary-text-card-seller">{card.primary}</p>
                                        <p className="secondary-text-card-seller">{card.secondary}</p>
                                    </div>
                                </div>
                    )})}
                </div>
                <footer className="footer-seller-left-card">Trusted by 2,400+ independent sellers</footer>
            </div>    
        </div>
    );
}