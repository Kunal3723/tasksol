import { AUTH, CHECK } from "../constants/action-types.js"
import * as api from '../../api/index.js';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        navigate("/");
        dispatch({ type: CHECK, payload: true });
    } catch (error) {
        dispatch({ type: CHECK, payload: false });
        console.log(error);
    }
};

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        navigate("/");
        dispatch({ type: CHECK, payload: true });
    } catch (error) {
        dispatch({ type: CHECK, payload: false });
        console.log(error);
    }
};

