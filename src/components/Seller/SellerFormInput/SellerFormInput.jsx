import './SellerFormInput.css'

export default function SellerFormInput({ identifierInput, placeholder, onChange, name, value, type = 'text' }) {
    return (
        <div className="input-identifier-container">
            <p className="identifier-text">{identifierInput}</p>
            <input
                type={type}
                name={name}
                value={value}
                required
                placeholder={placeholder}
                className='input-form-grid-seller'
                onChange={onChange}
            />
        </div>
    )
}