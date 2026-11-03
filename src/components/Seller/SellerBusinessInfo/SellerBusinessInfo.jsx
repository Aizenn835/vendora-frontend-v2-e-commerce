import './SellerBusinessInfo.css'
import '../../shared/SellerForms.css'
import SellerFormInput from '../SellerFormInput/SellerFormInput'
import FormHeader from '../FormHeader/FormHeader'
import { IconArrowRight } from '@tabler/icons-react'

export default function SellerBusinessInfo({onNext}){

    return(
        <div className="form-seller-form-container">
            <div className="inner-seller-form-container">
                <FormHeader primary={'About you'} secondary={'Step 1 of 3'} supportingText={'First, tell us who we’ll be working with.'}/>
                <form >
                    <div className="form-grid-seller">
                        <SellerFormInput identifierInput={'Fullname'} placeholder={'Your full name'} onChange={(e) => setFullname(e.target.value)}/>
                        <SellerFormInput identifierInput={'Work email'} placeholder={'example@business.com'} onChange={(e) => setWorkEmail(e.target.value)}/>
                        <SellerFormInput identifierInput={'Phone number'} placeholder={'+63 917-123-4567'} onChange={(e) => setPhoneNumber(e.target.value)}/>
                        <SellerFormInput identifierInput={'Business name'} placeholder={'Your brand or shop'} onChange={(e) => setBusinessName(e.target.value)}/>
                    </div>
                    <div className="divider-seller-form footer-divider-seller-form"></div>
                    <div className="btn-container-seller-form">
                        <div className="inner-btn-container-seller-form">
                            <button type='submit' className="continue-btn-seller-form" onClick={onNext}>Continue</button>
                            <IconArrowRight stroke={2} size={20} />
                        </div>
                    </div>
                </form>   
            </div>
        </div>
    )
}