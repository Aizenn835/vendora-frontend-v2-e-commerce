import AdminContentHeader from '../AdminContentHeader/AdminContentHeader';
import AdminApprovalModal from '../AdminApprovalModal/AdminApprovalModal.jsx'
import AdminTableSellerApplication from '../AdminTableSellerApplication/AdminTableSellerApplication.jsx';
import './SellerApplicationAdmin.css'
import { useState } from 'react';


export default function SellerApplicationAdmin(){
    const [isApprovalModalOpen , setIsApprovalModalOpen] = useState(false);
    const [applicationId , setApplicationId] = useState(null);
    
    const handleApproval = (id) => {
        setIsApprovalModalOpen(true);
        setApplicationId(id);
    }

    return(
        <div className="seller-application-admin-container">
            <AdminContentHeader />
            <AdminApprovalModal isOpen={isApprovalModalOpen} onClose={() => {setIsApprovalModalOpen(false)}} id={applicationId}/>
            <section className="seller-application-hero">
                <AdminTableSellerApplication onOpen={handleApproval}/>
            </section>

        </div> 
    );
}