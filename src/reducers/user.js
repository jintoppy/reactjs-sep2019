import userActionTypes from '../actionTypes/user';

const initialState = {
    selectedUser: null,
    users: []
};

export default (state = initialState, action) => {
    if(action.type === userActionTypes.GOT_USERS){
        return {
            ...state,
            users: action.payload
        };
    }
    if(action.type === userActionTypes.USER_SELECTED){
        return {
            ...state,
            selectedUser: action.payload
        };
    }
    return state;
};