import { tableData , filterCounter} from '../../../api/admin'
import { enumChecker , formatInitial } from '../../../utils/helper'
import SellerBadge from '../../shared/SellerBadge/SellerBadge'
import {useState , useEffect } from 'react'
import './AdminTableSellerApplication.css'


const formatDate = (value) => {
    return new Date(value).toLocaleDateString("en-PH" , { year: "numeric" , month: "short" , day: "numeric"});
}

const PAGE_SIZE = 8;

export default function AdminTableSellerApplication({onOpen}){


    const [filter , setFilter] = useState("PENDING");
    const [data , setData] = useState(null);
    const [page , setPage] = useState(0);
    const [filterCount , setFilterCount] = useState({});

    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(""); 

    const sellerStatus = [
        {status: "PENDING" , count: filterCount.PENDING ?? 0 },
        {status: "APPROVED" , count: filterCount.APPROVED ?? 0 },
        {status: "SUSPENDED" , count: filterCount.SUSPENDED ?? 0 },
        {status: "BANNED" , count: filterCount.BANNED ?? 0 }
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
    }, [filter , page]);

    useEffect(() => {
        let ignore = false;
        
        filterCounter()
            .then((response) => {
                if(!ignore) setFilterCount(response.data);
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
    const totalPage = data?.totalPages ?? 0;
    
    return(
        <section>
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
                                        <span className="shop-initials">{formatInitial(app.shopName)}</span>
                                        <div>
                                            <div className="shop-name">{app.shopName}</div>
                                            <div className="shop-email">{app.shopEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{enumChecker(app.sellerCategory)}</td>
                                <td>{formatDate(app.createdAt)}</td>
                                <td><SellerBadge badge={app.sellerStatus}/></td>
                                <td>
                                    <div className="actions-admin-table-container">
                                        <button className="app-btn app-btn-main">View</button>
                                        <button className="app-btn app-btn-approve" onClick={() => onOpen(app.id)}>Approve</button>
                                        <button className="app-btn app-btn-warn">Reject</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="applications-footer">
                <span>Showing 1 to 10 of 20</span>
                <div className="applications-pager">
                    <button type="button" disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
                    <span>Page {totalPage === 0 ? 0 : page + 1 } of {totalPage}</span>
                    <button type="button" disabled={page + 1 >= totalPage} onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>
        </section>
    );
}