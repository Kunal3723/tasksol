import * as api from '../../api/index.js';
import { FETCH } from '../constants/action-types';

export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await api.fetchprofile();

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


