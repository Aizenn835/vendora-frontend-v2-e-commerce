const LASTNAME_FIRSTNAME_MAX = 50;
const LASTNAME_FIRSTNAME_PATTERN = /^[\p{L} '.-]+$/u;
const DIGIT_PATTERN = /\d/;

export function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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