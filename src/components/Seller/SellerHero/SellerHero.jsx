import SellerFormApplication from '../SellerFormApplication/SellerFormApplication'
import SellerLeftCard from '../SellerLeftCard/SellerLeftCard'
import './SellerHero.css'

export default function SellerHero(){
    return(
        <div className="seller-hero-container">
            <SellerLeftCard />
            <SellerFormApplication />
        </div>
    )
}