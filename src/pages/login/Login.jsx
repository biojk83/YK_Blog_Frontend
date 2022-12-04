import React from 'react'
import './login.css'
import { Link } from "react-router-dom"
import { useContext, useRef } from "react";
import { Context } from "../../context/Context"
import axios from "axios";

export default function Login() {
    
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("login start");
        dispatch({ type: "LOGIN_START"});
        try{
            console.log("login axios");
            const res = await axios.post("auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
            console.log("login success");
        } catch(err) {
            
            dispatch({ type:"LOGIN_FAILURE",})
            console.log("login fail");
        }
    };


    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="Enter your username" ref={userRef} />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password" ref={passwordRef} />
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/register">Register</Link>
                </button>
        </div>
    )
}