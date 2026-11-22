import { jwtDecode } from "jwt-decode";

export default function Decoder(token){
    if(!token) return null;

    try {
        const claims = jwtDecode(token);

        if(claims.expiration * 1000 < Date.now()) return null;

        return {
            email: claims.email,
            role: String(claims.role).replace("ROLE_" , "")
        }
    } catch {
        return null;
    }
}