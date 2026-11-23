import { useEffect } from 'react';
import './AddSellerApplicationAdminModal.css'


const initialData = {
    businessInfo: { email: "", phoneNumber: "", shopName: "" },
    aboutYourShop: { sellerCategory: "", websiteLink: "", description: "" }
}

export default function AddSellerApplicationAdmin({isOpen , close}){

    useEffect(() => {
        if(!isOpen) return;
        const handleKey = (e) => {
            if(e.key === "Escape") close();
        }

        document.addEventListener("keydown" , handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown" , handleKey);
            document.body.style.overflow = "";
        }
    });

    return(
        <div className={`add-seller-application-admin-overlay ${isOpen ? 'open-seller-application' : ''}`} onClick={close}>
            <div className="modal-content-admin" onClick={(e) => e.stopPropagation()}>
                <div className="header-modal-content-admin">
                    <p className='application-header-text-admin'>Create an Application</p>
                    <span className='exit-admin-application-seller' onClick={close}>X</span>
                </div>
            </div>
        </div>
    );
}