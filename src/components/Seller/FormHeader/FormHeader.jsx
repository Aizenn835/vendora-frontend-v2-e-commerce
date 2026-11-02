import './FormHeader.css'

export default function FormHeader({primary , secondary , supportingText}){
    return(
        <div className="seller-form-header">
            <div className="primary-seller-form-header-text-container">
                <h3>{primary}</h3>
                <span className='steps-text'>{secondary}</span>
            </div>
            <p>{supportingText}</p>
        </div>
    )
}