import { FETCH } from '../constants/action-types';

export const profileReducers = (posts = [], action) => {
    switch (action.type) {

        case FETCH:
            return action.payload;
               default:
            return posts;
    }
};