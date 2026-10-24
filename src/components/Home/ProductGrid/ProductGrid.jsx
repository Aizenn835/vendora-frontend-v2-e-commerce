import ProductGridImage from '../ProductGridImage/ProductGridImage'
import Glossier from '../../../assets/products/glossier.webp'
import Shoe from '../../../assets/products/shoe.webp'
import Phone from '../../../assets/products/phone.jpg'
import Watch from '../../../assets/products/watch.webp'
import './ProductGrid.css'

export default function ProductGrid(){
    const products = [ 
        {image: Glossier , topLeft: "Bestseller" , name: "Glossier Solution Exfoliating Skin Perfector" , price: " ₱1,499" , support: "Exfoliating skincare · 100 ml"},
        {image: Shoe , topLeft: "New" , name: "Hummel Blue Flame Court Shoes" , price: " ₱3,299" , support: "Lightweight performance footwear"},
        {image: Phone , topLeft: "Limited" , name: "iPhone 11 White Edition" , price: " ₱39,990" , support: "128 GB · Brand new"},
        {image: Watch , topLeft: "New" , name: "Silver Minimalist Smartwatch" , price: " ₱3,499" , support: "Everyday smart features · Silver"}
    ];

    return(
        <div className="product-grid-container">
            <div className="product-grid-inner-container">
                <div className="product-grid-header-container">
                    <p className='product-grid-sub-text'>NEW ARRIVALS or FRESH FROM OUR SELLERS</p>
                    <div className="product-grid-header-list-container">
                        <h1 className='product-grid-title'>New from every shop</h1>
                        <nav className='nav-product-grid-list'>
                            <ul className='product-grid-list-container'>
                                <li className="segmented-control active">All</li>
                                <li className="segmented-control">Wear</li>
                                <li className="segmented-control">Carry</li>
                                <li className="segmented-control">Home</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="product-grid-products">
                    {products.map((list) => {
                      return <ProductGridImage key={list.image} 
                                               image={list.image} 
                                               leftUpperText={list.topLeft}
                                               name={list.name}
                                               price={list.price}
                                               supportingText={list.support}
                                               />
                })}
                </div>
            </div>
        </div>
    );
}