/* eslint-disable prettier/prettier */
export const FORM_LOADER = 'FORM_LOADER';
export const SAVE_DETAILS = 'SAVE_DETAILS';

export const setFormLoader = data => ({
    type: FORM_LOADER,
    payload: data,
});

export const saveDetails = data => {
    return dispatch => {
        dispatch({ type: SAVE_DETAILS, payload: data });
    };
};

