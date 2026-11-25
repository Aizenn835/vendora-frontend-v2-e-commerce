import { tableData , filterCounter} from '../../../api/admin'
import {useState , useEffect } from 'react'
import './AdminTableSellerApplication.css'


const formatInitials = (value) => {
    return value.split(" ").slice(0,2).map((word) => word[0]).join("").toUpperCase();
}

const formatDate = (value) => {
    new Date(value).toLocaleDateString("en-PH" , { year: "numeric" , month: "short" , day: "numeric"});
}

const PAGE_SIZE = 8;

export default function AdminTableSellerApplication(){


    const [filter , setFilter] = useState("PENDING");
    const [data , setData] = useState(null);
    const [page , setPage] = useState(0);
    const [isLoading , setIsLoading] = useState(false);
    const [filterCount , setFilterCount] = useState({});
    const [error , setError] = useState(""); 

    const sellerStatus = [
        {status: "PENDING" , count: filterCount.PENDING ?? 0 },
        {status: "APPROVED" , count: filterCount.APPROVED ?? 0},
        {status: "SUSPENDED" , count: filterCount.SUSPENDED ?? 0},
        {status: "BANNED" , count: filterCount.BANNED ?? 0}
    ];

    useEffect(() => {
        let ignore = false;
        setIsLoading(true);
        setError("");

        tableData({filter , page , size: PAGE_SIZE})
            .then((response) => {
                if(!ignore) {
                    setData(response.data);
                }
                
            })
            .catch((err) => {
                if(!ignore) setError(err.response?.data?.message || "Could not load applications");
            })
            .finally(() => {
                if(!ignore) setIsLoading(false);
            });

            return(() => {
                ignore = true;
            })
    }, [filter]);

    useEffect(() => {
        let ignore = false;
        
        filterCounter()
            .then((response) => {
                if(!ignore) setFilterCount(response.data);
                console.log(response?.data);
            })
            .catch((err) => {
                if(!ignore) setError(err.response?.data?.message || "Could not fetch status count.");
            })
            .finally(() => {
                setIsLoading(false);
            });

            return(() => {
                ignore = true;
            });
    }, [filter]);

    const handleFilter = (value) => {
        setFilter(value);
        setPage(0);
    }

    const rows = data?.content ?? [];
    
    return(
        <div className="admin-table-seller-container">
            <nav className="seller-status-filter-admin-container">
                <ul className="seller-status-admin-inner-container">
                    {sellerStatus.map((seller) => (
                        <li 
                        key={seller.status} 
                        className={`seller-status-container ${filter === seller.status ? "active-status-admin" : ""}`} 
                        onClick={() => handleFilter(seller.status)}>
                            <p className='seller-status-text'>{seller.status.charAt(0) + seller.status.slice(1).toLowerCase()}</p>
                            <span className='seller-status-count'>{seller.count}</span>
                        </li>
                    ))}
                </ul>
            </nav>
            <table className='applications-table'>
                <thead>
                    <tr>
                        <th>Shop</th>
                        <th>Category</th>
                        <th>Applied</th>
                        <th>Status</th>
                        <th className="applications-actions-head">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && rows.map((app) => (
                        <tr key={app.id}>
                            <td>
                                <div className="shop-cell">
                                    <span className="shop-initials">{formatInitials(app.shopName)}</span>
                                    <div>
                                        <div className="shop-name">{app.shopName}</div>
                                        <div className="shop-email">{app.shopEmail}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{app.sellerCategory}</td>
                            <td>Nov 24, 2026</td>
                            <td><span className='status-badge'>Pending</span></td>
                            <td>
                                <div className="actions-admin-table-container">
                                    <button className="app-btn app-btn-main">View</button>
                                    <button className="app-btn app-btn-approve">Approve</button>
                                    <button className="app-btn app-btn-warn">Reject</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}