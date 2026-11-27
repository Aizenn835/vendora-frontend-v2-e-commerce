import { useEffect, useState } from 'react';
import { viewSellerById , approveApplication } from '../../../api/admin';
import { IconFileLike } from '@tabler/icons-react';
import { formatInitial } from '../../../utils/helper'
import './AdminApprovalModal.css'
import toast from 'react-hot-toast';

export default function AdminApprovalModal({isOpen , onClose , id , onSuccess}){

    const [data , setData] = useState({});
    const [busyId , setBusyId] = useState(null);

    const [error , setError] = useState("");
    const [isLoading , setIsLoading] = useState(false);


    useEffect(() => {
        if(!id) return;
        
        let ignore = false;
        setIsLoading(true);

        viewSellerById({id})
         .then((response) => {
            if(!ignore){
                setData(response?.data);
                setBusyId(response?.data?.id);
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

    const handleOnClickBtn = async (data , action , message) => {
        const appId = data.id;
        setBusyId(appId);

        try { 
            await action({id: appId});
            toast.success(message); // this doesnt work for now
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message);
        } finally {
            setBusyId(null);
        }
    }

    const approve = (data) => {
        handleOnClickBtn(data , approveApplication , "Successfully promoted to seller!");
    }


    return(
        <div className={`modal-approval-admin-overlay ${isOpen ? "open-modal-approval" : ""}`} onClick={onClose}>
            <div className="modal-approval-admin-content" onClick={(e) => e.stopPropagation()}>
                <div className="inner-modal-admin-approval-container">
                        <div className="modal-admin-approval-header">
                            <div className="modal-admin-approval-inner-container">
                                <div className="left-content-modal-approval-container">
                                    <IconFileLike stroke={2} size={20}/>
                                    <h3 className="admin-seller-business-name">Approve {data.shopName}?</h3>
                                </div>
                                <span className='exit-admin-approval-modal' onClick={onClose}>X</span>
                            </div>
                            <p className='approval-admin-confirmation-message'>This shop will be able to list products on Vendora, and the account will become a seller account.</p>
                        </div>
                        <div className="business-name-info-admin-container">
                            <div className="business-initial">{formatInitial(data.shopName)}</div>
                            <div className="business-info-admin-inner-container">
                                <h4 className='business-name-info-admin'>{data.shopName}</h4>
                                <span className='business-email-info-admin'>{data.email}</span>
                            </div>
                        </div>
                        <div className="modal-approval-btn-container">
                            <button className="modal-approval admin-cancel-btn" onClick={() => onClose()}>Cancel</button>
                            <button className="modal-approval admin-approve-btn" onClick={() => approve(data)}>Approve</button>
                        </div>
                </div>
            </div>
        </div>
    );
}