import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { Auth } from "./Auth";



function Login() {
    const { handleSubmit } = useForm();
    const history = useHistory();
    const [passwordShown, shownPassword] = useState(false);
    // const { registerUser } = useContext(Auth);
    const adminPassword = "admin123";

    const passwordVisiblity = () => {
        shownPassword(passwordShown ? false : true);
    };

    function onSubmit(data) { 
        console.log("data", data); 
        localStorage.setItem("user", data.name);
        let loginInput = data.loginPassword;

        function strCompare(loginInput, adminPassword){
            return loginInput === adminPassword;
        }
        if(strCompare(loginInput, adminPassword) === true) {
            alert('Hello ' + data.name);
            // registerUser(data.name);
            history.push("/admin/dashboard");
        }
        if(strCompare(loginInput, adminPassword) === false) {
            alert("The password is incorrect. Try again.");
        }
        console.log(strCompare(loginInput, adminPassword));
    }

    return (
        <div className="login">
            <Helmet><title>Log In | Holidaze</title></Helmet>
            {/* <div className="login__dark">
                <h3>Don't have an Account?</h3>
                <p>Click the button below to register a admin account.</p>
                <Link to={"/register"}><button title="Click to register" className="btn-blue">Register</button></Link> 
            </div> */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login</h3>
                    <p title="Log in below">Log in below</p>
                    <input title="Fill in your name" name="name" type="name" placeholder="name" required/>
                    <input title="Fill in your password" name="loginPassword" type={passwordShown ? "text" : "password"} placeholder="password" pattern=".{4,}" required/>
                    <i onClick={passwordVisiblity} class={passwordShown ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                    <button title="Log in" className="btn-blue">Log in</button>
                    {/* <Link to={"/register"}><button title="Click to register" className="register-btn btn-blue">Register</button></Link>  */}
                </form>
            </div>
        </div>
    );
}

export default Login;