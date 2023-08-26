import { Route, Routes } from "react-router-dom"
import { Home } from "../Main/home"
import { Login } from "../Signin/login"
import { Otp } from "../Otp/otp";
import { Food} from "../Food/front"



export const RoutesNew = () => {
    return (
        <>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/otp" element={<Otp />} />
                <Route exact path="/food" element={<Food />} />
            </Routes>


        </>
    )

}