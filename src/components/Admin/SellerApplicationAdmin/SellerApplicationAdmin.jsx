import AdminContentHeader from '../AdminContentHeader/AdminContentHeader';
import AddSellerApplicationAdmin from '../AddSellerApplicationAdmin/AddSellerApplicationAdminModal';
import './SellerApplicationAdmin.css'
import { useState } from 'react';


export default function SellerApplicationAdmin(){

    const [isModalOpen , setIsModalOpen] = useState(false);

    return(
        <div className="seller-application-admin-container">
            <AdminContentHeader onAddClick={() => setIsModalOpen(true)}/>
            <AddSellerApplicationAdmin isOpen={isModalOpen} close={() => setIsModalOpen(false)}/>
        </div> 
    );
}