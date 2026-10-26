import './Footer.css'

export default function Footer({onMenuClick}){

    return(
        <div className="home-footer-container">
            <div className="inner-home-footer-container">
                <h3 className='home-footer-logo'>VENDORA</h3>
                <nav className="home-footer-list-container">
                    <ul className='inner-footer-list'>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Journal</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <span className='trademark-vendora'>© 2026 Vendora</span> 
            </div>
        </div>
    );
}