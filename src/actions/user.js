import userActionTypes from '../actionTypes/user';
export const onUsersReceived = (list) => {
    return {
        type: userActionTypes.GOT_USERS,
        payload: list
    };
};

export const onSelectUser = (usr) => {
    return {
        type: userActionTypes.USER_SELECTED,
        payload: usr
    };
};