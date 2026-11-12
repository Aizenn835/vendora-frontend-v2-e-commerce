const LASTNAME_FIRSTNAME_MAX = 50;
const DESCRIPTION_LENGTH = 100;
const LASTNAME_FIRSTNAME_PATTERN = /^[\p{L} '.-]+$/u;
const DIGIT_PATTERN = /\d/;
const PHONE_NUMBER_PATTERN = /^[+]?[(]?[0-9]{1,4}[)]?([-\s.]?[0-9]{1,3}){1,4}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



export function validateEmail(email){
    return EMAIL_PATTERN.test(email);
}

export function validateName(value) {
    const name = value.trim();

    if (name.length === 0 || 
        name.length > LASTNAME_FIRSTNAME_MAX || 
        DIGIT_PATTERN.test(name) ||
        !LASTNAME_FIRSTNAME_PATTERN.test(name)) {
        return false;
    }


    return true;
}

export function validateToken(){
    const token = localStorage.getItem("Token");
    return !!token;
}

export function validatePhoneNumber(value){
    const phoneNumber = value.trim();
    PHONE_NUMBER_PATTERN.test(phoneNumber);
}

export function validateBusinessInfo(section , value){

    if(section === "email"){
        return EMAIL_PATTERN.test(value);
    }
    else if(section === "phoneNumber"){
        return PHONE_NUMBER_PATTERN.test(value);
    }
    else if(section === "shopName"){
        return /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z])[a-zA-Z0-9\s_-]{5,30}$/.test(value);
    }
}

export function validateAboutYourShop(section, values) {
    if (section === "websiteLink") {
        try {    
            const url = new URL(values);
            
            return url.protocol === "http:" || url.protocol === "https:";
        } catch (_) {
            return false; 
        }
    } 
    return true; 
}
