import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthCallback(){
    const navigate = useNavigate();
    const handled = useRef(false);


    useEffect(() => {
        if(handled.current) return;
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        handled.current = true;

        if(token){
            localStorage.setItem("Token", token);
            window.history.replaceState({}, document.title, window.location.pathname);
            navigate("/" , {replace: true});
        } else {
            navigate("/login" , {replace:true});
        }
    }, [navigate]);

    return <p>Signing you in....</p>;
}