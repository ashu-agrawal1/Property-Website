import React from 'react'
import "./Register.css"
import { NavLink, useNavigate } from 'react-router-dom'

import axios from "axios";

const baseurl = process.env.REACT_APP_BASE_URL;

const Register = () => {
    const navigate = useNavigate();
    function submitHandler(e) {
        e.preventDefault()
        if (document.getElementsByName("password")[0].value != document.getElementsByName("repassword")[0].value) {
            alert("Passwords Not matched!!!")
            return
        }

        let formData = {
            email: document.getElementsByName("email")[0].value,
            password: document.getElementsByName("password")[0].value,
            firstName: document.getElementsByName("firstname")[0].value,
            lastName: document.getElementsByName("lastname")[0].value,
            mobile: document.getElementsByName("mobile")[0].value,
        };
        axios({
            method: "post",
            url: baseurl + "/register",
            data: formData,
        })
            .then((res) => {
                console.log(res.data)
                alert(res?.data?.message);
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
                alert(err?.data?.message);
            })
    }

    return (
        <div className="form_wrapper">
            <div className="form_container">
                <div className="title_container">
                    <h2>Registration Form</h2>
                </div>
                <div className="row clearfix">
                    <div className="">
                        <form onSubmit={submitHandler}>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field">
                                        <span>
                                            <i aria-hidden="true" className="fa fa-user" />
                                        </span>
                                        <input
                                            type="text"
                                            name="firstname"
                                            placeholder="First Name"
                                            required={true} />
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field">
                                        <span>
                                            <i aria-hidden="true" className="fa fa-user" />
                                        </span>
                                        <input
                                            type="text"
                                            name="lastname"
                                            placeholder="Last Name"
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="input_field">
                                <span>
                                    <i aria-hidden="true" className="fa fa-envelope" />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required={true}
                                />
                            </div>
                            <div className="input_field">
                                <span>
                                    <i aria-hidden="true" className="fa fa-envelope" />
                                </span>
                                <input
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile"
                                    required={true}
                                />
                            </div>
                            <div className="input_field">
                                <span>
                                    <i aria-hidden="true" className="fa fa-lock" />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required={true}
                                />
                            </div>
                            <div className="input_field">
                                <span>
                                    <i aria-hidden="true" className="fa fa-lock" />
                                </span>
                                <input
                                    type="password"
                                    name="repassword"
                                    placeholder="Re-type Password"
                                    required={true}
                                />
                            </div>
                            <div>
                                <p style={{ "margin": "5px" }}>Already a User? <NavLink to="/login">Login Here</NavLink></p>
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Register
