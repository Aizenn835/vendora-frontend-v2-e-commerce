import './SellerFormInput.css'

export default function SellerFormInput({identifierInput , placeholder , onChange}){
    return(
        <div className="input-identifier-container">
            <p className="identifier-text">{identifierInput}</p>
            <input type="text" required placeholder={placeholder} className='input-form-grid-seller' onChange={onChange}/>
        </div>
    )
}