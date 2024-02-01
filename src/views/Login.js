import React from 'react'
import "./Login.css"
import { NavLink, useNavigate } from 'react-router-dom'

import axios from "axios";

const baseurl = process.env.REACT_APP_BASE_URL;

const FeatureCard = () => {
    const navigate = useNavigate();
    function loginHandler(e) {
        e.preventDefault()
        let formData = { email: document.getElementsByName("email")[0].value, password: document.getElementsByName("password")[0].value };
        axios({
            method: "post",
            url: baseurl + "/login",
            data: formData,
        })
            .then((res) => {
                console.log(res.data)
                alert("Login Successful")
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                alert(err?.response?.data?.error);
            })
    }

    return (
        <form className="login" onSubmit={loginHandler} >
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
            <input type="text" placeholder="Email" name='email' required />
            <input type="password" placeholder="Password" name='password' required />
            <input type="submit" defaultValue="Log In" />
            <div className="links">
                <NavLink to="/register">Register Here</NavLink>
            </div>
        </form>
    )
}

export default FeatureCard
