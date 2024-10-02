import { Navigate } from "react-router-dom";

export default function Login() {
    return(
        <>
            <h1>Login Page</h1>
            <Navigate to="/create-account"/>
        </>
    )
}