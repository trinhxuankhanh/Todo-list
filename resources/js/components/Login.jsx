import React, { useState } from "react";
import loginApi from "../api/loginApi";

import "./Login.css";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = (e) => {
        e.preventDefault();
        loginApi.getuser({ email, password }).then((response) => {
            typeof response === "string"
                ? alert(response)
                : props.auth(response);
        });
    };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="email"
                        id="login"
                        className="fadeIn second"
                        name="login"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        name="login"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="submit"
                        className="fadeIn fourth"
                        value="Log In"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
