import Google from '../../../assets/login/Google.png'
import { FaFacebookF } from "react-icons/fa6";
import './OAuth.css'

export default function OAuth(){
    return(
        <div className="oauth-container-login">
            <button className="oauth-btn-container google">
                <img src={Google} alt="Google OAuthentication Image" className='image-google'/>
                <span className='oauth-google-text'>Sign in with Google</span>
            </button>
            <button className="oauth-btn-container facebook">
                <FaFacebookF size={18} color="#ffffff" title='Sign in with facebook'/>
                <span className='oauth-facebook-text'>Continue with Facebook</span>
            </button>
        </div>
    );
}