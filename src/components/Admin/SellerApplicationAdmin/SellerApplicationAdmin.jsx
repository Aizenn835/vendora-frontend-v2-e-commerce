import AdminContentHeader from '../AdminContentHeader/AdminContentHeader';
import AdminApprovalModal from '../AdminApprovalModal/AdminApprovalModal.jsx'
import AdminTableSellerApplication from '../AdminTableSellerApplication/AdminTableSellerApplication.jsx';
import './SellerApplicationAdmin.css'
import { useState } from 'react';


export default function SellerApplicationAdmin(){
    const [isApprovalModalOpen , setIsApprovalModalOpen] = useState(false);
    const [applicationId , setApplicationId] = useState(null);
    const [reloadKey , setReloadKey] = useState(0);

    const handleApprovalModal = (id) => {
        setIsApprovalModalOpen(true);
        setApplicationId(id);
    }

    const handleApproveBtn = () => {
        setIsApprovalModalOpen(false);
        setReloadKey((prev) => prev + 1);
    }

    return(
        <div className="seller-application-admin-container">
            <AdminContentHeader />
            <AdminApprovalModal isOpen={isApprovalModalOpen} 
                                id={applicationId}
                                onClose={() => {setIsApprovalModalOpen(false)}}
                                onSuccess={handleApproveBtn}
            />
            <section className="seller-application-hero">
                <AdminTableSellerApplication onOpen={handleApprovalModal} 
                                             reloadKey={reloadKey}
                />
            </section>
        </div> 
    );
}