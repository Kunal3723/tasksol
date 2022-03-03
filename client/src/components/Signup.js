import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { signUp } from "../redux/actions/auth.js";
import { CHECK } from '../redux/constants/action-types.js';


function Signup() {


    const initial = {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        password: ""
    }
    const [userData, setuserData] = useState(initial);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }

        return (false)
    }

    function ValidateMobile(inputtxt) {
        var phoneno = /^\d{10}$/;
        if ((inputtxt.match(phoneno))) {
            return true;
        }
        else {

            return false;
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        if (ValidateEmail(userData.email) && ValidateMobile(userData.phone))
            dispatch(signUp(userData, navigate));
        else
            dispatch({ type: CHECK, payload: false })

    }
    return (
        <div className='d-flex justify-content-center my-5'>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Firstname</label>
                    <input type="text" className="form-control" id="firstName" aria-describedby="firstName" onChange={function (e) {
                        setuserData({ ...userData, firstName: e.target.value })
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Lastname</label>
                    <input type="text" className="form-control" id="lastName" aria-describedby="lastName" onChange={function (e) {
                        setuserData({ ...userData, lastName: e.target.value })
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={function (e) {
                        setuserData({ ...userData, email: e.target.value })
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" aria-describedby="password" onChange={function (e) {
                        setuserData({ ...userData, password: e.target.value })
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="phone" onChange={function (e) {
                        setuserData({ ...userData, phone: e.target.value })
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" onChange={function (e) {
                        setuserData({ ...userData, address: e.target.value })
                    }} />
                </div>
                <div className="mb-3">
                    <Link to="/auth">Already have account? Login</Link>
                </div>
                <button type="submit" className="btn btn-primary" onClick={function (e) { handleSubmit(e); }}>Sign Up</button>
            </form>

        </div>
    )
}

export default Signup;