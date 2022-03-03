import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../redux/actions/profile';

function Home() {

    const { firstName, lastName, email, address, phone } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/auth");
        }
    }, [])


    useEffect(() => {

        dispatch(getProfile());
        setuser(JSON.parse(localStorage.getItem("profile")));
        
    }, [])
    return (
        <div>
            <div className='d-flex justify-content-center my-3'><h1 >User Profile</h1></div>

            <div className='d-flex justify-content-center my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Firstname: </b>  {firstName}</li>
                        <li className="list-group-item"><b>Lastname: </b>  {lastName}</li>
                        <li className="list-group-item"><b>E-mail: </b>  {email}</li>
                        <li className="list-group-item"><b>Phone Number: </b>  {phone}</li>
                        <li className="list-group-item"><b>Address: </b>  {address}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Home