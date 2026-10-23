import ArrowLeft from '../../shared/ArrowLeft/ArrowLeft.jsx';
import './Collection.css'

export default function Collection(){
    return(
        <div className="collection-container">
             <div className="eyebrow-collection">
                <p className='spring-text'>Spring / Summer 2026</p>
             </div>
             <div className="eye-collection">
                <p className='eyebrow-text'>Independent sellers, in one place</p>
                <h1 className='headline'>Shop small, shop together</h1>
                <p className='sentences'>Browse products from independent sellers, fill one cart, and check out once. Each seller ships their own part of your order</p>
             </div>
             <button className="shop-collection">
                <p>Shop the collection</p>
                <ArrowLeft subClass={"arrow-left-container-collection"}/>
             </button>
             <footer className='footer-collection'>
                <a href="#">Want to sell? Open your shop</a>
             </footer>
        </div>
    )
}