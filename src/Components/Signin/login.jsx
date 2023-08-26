import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './login.css'

export const Login = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState();
    const handleClick = async () => {
        console.log("cliced : ", number);
        try {
            const data = {
                "phone": number,
                "dial_code": "+91"
            }
            const result = await axios.post("https://staging.fastor.in/v1/pwa/user/register", data)
            console.log("result: ",result)
            if(result.data.status === "Success") {
                localStorage.setItem('loginData', JSON.stringify(data))
                navigate("/otp")
            }
        }
        catch (error) {
            console.log("error: ", error)
        }



    }

    return (
        <>

<div className="head-login"><h1>Login With Number</h1></div>

        <div className="login">
            <input className="input-box" placeholder 
                = "Enter Your Mobile Number" type="number" onChange={(event) => {
                setNumber(event.target.value) 
            }} />
            <button className="button" onClick={handleClick}>Signin</button>
        </div>
        </>
    )
}