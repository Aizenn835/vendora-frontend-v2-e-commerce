import { useState } from 'react';
import { replace, useNavigate } from 'react-router-dom';
import { validateToken } from '../../../utils/validator.jsx';
import ArrowLeft from '../../shared/ArrowLeft/ArrowLeft.jsx';
import './Collection.css'

export default function Collection(){
   const [isLogin , setIsLogin] = useState(false);
   const navigate = useNavigate();

   const handleLogin = () => {
      if(validateToken()){
         setIsLogin(true);
         navigate('/seller' , {replace: true})
      } else {
         setIsLogin(false);
         navigate('/login', {replace: true , state: {message: 'Please login first.'}})
      }
   }
   return(
      <div className="collection-container">
            <div className="eyebrow-collection">
               <p className='spring-text'>Spring / Summer 2026</p>
            </div>
            <div className="eye-collection">
               <p className='eyebrow-text'>Independent sellers, in one place</p>
               <h1 className='headline'>Shop small, shop together</h1>
               <p className='sentences'>Browse products from independent sellers, fill one cart, and check out once. Each seller ships their own part of your order</p>
            </div>
            <button className="shop-collection">
               <p>Shop the collection</p>
               <ArrowLeft subClass={"arrow-left-container-collection"}/>
            </button>
            <footer className='footer-collection'>
               <button onClick={handleLogin}>Want to sell? Open your shop</button>
            </footer>
      </div>
   )
}