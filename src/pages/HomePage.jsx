import HomePage from "../components/Home/Home.jsx";
import { Toaster } from "react-hot-toast";

export default function Home(){
    return(
        <>
            <Toaster />
            <HomePage />
        </>
    );
}