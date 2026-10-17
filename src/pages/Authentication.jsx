import Login from '../components/Auth/Login.jsx'
import { Toaster } from "react-hot-toast";

export default function Authentication(){
    return(
        <>
            <Toaster />
            <Login />
        </>
    );
}