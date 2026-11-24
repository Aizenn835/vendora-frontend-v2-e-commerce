import { useState } from 'react';
import './AdminSellerStatusNav.css'


const sellerStatus = [
    {status: "All" , count: 53 },
    {status: "Pending" , count: 7 },
    {status: "Approved" , count: 3},
    {status: "Suspended" , count: 2},
    {status: "Banned" , count: 1}
];

export default function AdminSellerStatusNav(){

    const [activeStatus , setActiveStatus] = useState("All");

    const handleStatus = (status) => {
        sellerStatus.forEach((seller) => {
            if(!seller.status.includes(status)){
                return;
            }
            setActiveStatus(status);
        });
    }

    return(
        <div className="admin-seller-status-nav-container">
            <nav className="seller-status-filter-admin-container">
                <ul className="seller-status-admin-inner-container">
                    {sellerStatus.map((seller , index) => (
                        <li key={index} className={`seller-status-container ${activeStatus === seller.status ? "active-status-admin" : ""}`} onClick={() => handleStatus(seller.status)}>
                            <p className='seller-status-text'>{seller.status}</p>
                            <span className='seller-status-count'>{seller.count}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}