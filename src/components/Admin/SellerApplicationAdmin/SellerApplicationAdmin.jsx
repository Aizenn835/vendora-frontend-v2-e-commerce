import AdminContentHeader from '../AdminContentHeader/AdminContentHeader';
import AdminTableSellerApplication from '../AdminTableSellerApplication/AdminTableSellerApplication.jsx';
import './SellerApplicationAdmin.css'


export default function SellerApplicationAdmin(){

    return(
        <div className="seller-application-admin-container">
            <AdminContentHeader/>
            <section className="seller-application-hero">
                <AdminTableSellerApplication />
            </section>
        </div> 
    );
}