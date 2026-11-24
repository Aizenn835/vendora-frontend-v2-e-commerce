import './AdminTableSellerApplication.css'

export default function AdminTableSellerApplication(){
    return(
        <div className="admin-table-seller-container">
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
                    <tr>
                        <td>
                            <div className="shop-cell">
                                <span className="shop-initials">TH</span>
                                <div>
                                    <div className="shop-name">Tech Haven</div>
                                    <div className="shop-email">techhaven@gmail.com</div>
                                </div>
                            </div>
                        </td>
                        <td>Electronics</td>
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
                </tbody>
            </table>
        </div>
    );
}