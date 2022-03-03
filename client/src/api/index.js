import axios from 'axios';

const url = 'http://localhost:5000';
const API = axios.create({
    baseURL: url
})
API.interceptors.request.use(function (req) {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
   
    }
    return req;
});
export const fetchprofile = () => API.get("user/profile");


export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);