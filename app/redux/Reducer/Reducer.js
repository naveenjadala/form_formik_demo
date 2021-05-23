/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import { FORM_LOADER, SAVE_DETAILS } from '../Action/Action';

const INITIAL_STATE = {
    formLoader: [],
    personalData: {},
};

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM_LOADER:
            return { ...state, formLoader: action.payload };
        case SAVE_DETAILS:
            // let value = state.personalData.push(action.payload);
            console.log("hjh", action);
            return { ...state, personalData: action.payload };
        default:
            return state;
    }
};

export default combineReducers({formReducer});
