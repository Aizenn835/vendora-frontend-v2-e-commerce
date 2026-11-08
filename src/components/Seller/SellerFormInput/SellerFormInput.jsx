import './SellerFormInput.css'

export default function SellerFormInput({ identifierInput, placeholder, onChange, name, value, type = 'text' , error}) {
   
    return (
        <div className="input-identifier-container">
            <p className={`identifier-text ${error ? 'invalid-identifier' : ''}`}>{identifierInput}</p>
            <div className="input-identifier-input-container">
                <input
                type={type}
                name={name}
                value={value}
                required
                placeholder={placeholder}
                onChange={onChange}
                className={`input-form-grid-seller ${error ? 'invalid-input' : ""}`}
                />
               {error && <span className='error-message'>{error}</span>}
            </div>
        </div>
    )
}