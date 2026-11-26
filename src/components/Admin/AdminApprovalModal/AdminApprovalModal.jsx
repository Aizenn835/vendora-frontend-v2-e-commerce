import { useEffect, useState } from 'react';
import { viewSellerById } from '../../../api/admin';
import { IconFileLike } from '@tabler/icons-react';
import { formatInitial } from '../../../utils/helper'
import './AdminApprovalModal.css'

export default function AdminApprovalModal({isOpen , onClose , id}){

    const [businessName , setBusinessName] = useState("");
    const [businessEmail , setBusinessEmail] = useState("");

    const [error , setError] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    useEffect(() => {
        if(!id) return;

        let ignore = false;
        setIsLoading(true);

        viewSellerById({id})
         .then((response) => {
            if(!ignore){
                setBusinessName(response?.data?.shopName);
                setBusinessEmail(response?.data?.email);
            }
         }).catch((err) => {
            if(!ignore) setError(err.response?.data?.message || "Could not load content.");
         }).finally(() => {
            setIsLoading(false);
         });

         return(() => {
            ignore = true;
         });

    }, [id]);

    return(
        <div className={`modal-approval-admin-overlay ${isOpen ? "open-modal-approval" : ""}`}>
            <div className="modal-approval-admin-content">
                <div className="inner-modal-admin-approval-container">
                    <div className="modal-admin-approval-header">
                        <div className="modal-admin-approval-inner-container">
                            <div className="left-content-modal-approval-container">
                                <IconFileLike stroke={2} size={20}/>
                                <h3 className="admin-seller-business-name">Approve {businessName}?</h3>
                            </div>
                            <span className='exit-admin-approval-modal' onClick={onClose}>X</span>
                        </div>
                        <p className='approval-admin-confirmation-message'>This shop will be able to list products on Vendora, and the account will become a seller account.</p>
                    </div>
                    <div className="business-name-info-admin-container">
                        <div className="business-initial">{formatInitial(businessName)}</div>
                        <div className="business-info-admin-inner-container">
                            <h4 className='business-name-info-admin'>{businessName}</h4>
                            <span className='business-email-info-admin'>{businessEmail}</span>
                        </div>
                    </div>
                    <div className="modal-approval-btn-container">
                        <button className="modal-approval admin-cancel-btn" onClick={onClose}>Cancel</button>
                        <button className="modal-approval admin-approve-btn">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    );
}