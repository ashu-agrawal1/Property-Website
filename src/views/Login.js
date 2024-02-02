import React, { useEffect } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

import axios from "axios";

const baseurl = process.env.REACT_APP_BASE_URL;

const Login = () => {
    const navigate = useNavigate();
    function loginHandler(e) {
        e.preventDefault()
        let loginForm = document.getElementById("login-form")
        let formData = new FormData(loginForm)
        axios({
            method: "post",
            url: baseurl + "/login",
            data: formData,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                console.log(res.data)
                alert("Login Successful")
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                alert(err?.response?.data?.error || "Something Went Wrong");
            })
    }
    function signUpHandler(e) {
        e.preventDefault()
        let signUpForm = document.getElementById("sign-up-form")
        let formData = new FormData(signUpForm)

        axios({
            method: "post",
            url: baseurl + "/register",
            data: formData,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                console.log(res.data)
                alert(res?.data?.message);
            })
            .catch((err) => {
                console.log(err)
                alert(err?.data?.message || "Something went wrong");
            })
    }

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container-login");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode-login");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode-login");
        });
    }, [])

    return (
        <div className="container-login">
            <div className="forms-container-login">
                <div className="signin-signup-login">
                    <form
                        onSubmit={loginHandler}
                        className="sign-in-form-login"
                        id="login-form"
                    >
                        <h2 className="title-login">Sign in</h2>
                        <div className="input-field-login">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Email" name="email" />
                        </div>
                        <div className="input-field-login">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" name="password" />
                        </div>
                        <input type="submit" defaultValue="Login" className="btn-login solid" />
                    </form>
                    <form onSubmit={signUpHandler} className="sign-up-form-login" id='sign-up-form'>
                        <h2 className="title-login">Sign up</h2>
                        <div className="input-field-login">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="First Name" name='firstName' />
                        </div>
                        <div className="input-field-login">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Last Name" name='lastName' />
                        </div>
                        <div className="input-field-login">
                            <i className="fas fa-envelope" />
                            <input type="email" placeholder="Email" name='email' />
                        </div>
                        <div className="input-field-login">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Mobile" name='mobile' />
                        </div>
                        <div className="input-field-login">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" name='password' />
                        </div>
                        <input type="submit" className="btn-login" defaultValue="Sign up" />
                    </form>
                </div>
            </div>
            <div className="panels-container-login">
                <div className="panel-login left-panel-login">
                    <div className="content-login">
                        <h3>New here ?</h3>
                        <p>
                            Please Sign Up to continue using our all features
                        </p>
                        <button className="btn-login transparent-login" id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src="imgs/log.svg" className="image-login" alt="" />
                </div>
                <div className="panel-login right-panel-login">
                    <div className="content-login">
                        <h3>One of us ?</h3>
                        <p>
                            Please Sign In to continue
                        </p>
                        <button className="btn-login transparent-login" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src="imgs/register.svg" className="image-login" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
