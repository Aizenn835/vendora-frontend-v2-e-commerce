import RightCard from "./RightCard/RightCard.jsx"
import LeftCard from "./LeftCard/LeftCard.jsx"
import './Login.css'

export default function Login(){
    return(
        <div className="login-container">
            <LeftCard />
            <RightCard />
        </div>
    );
}