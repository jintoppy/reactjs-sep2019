import axios from 'axios';
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

export const onAddUser = (newUser) => async (dispatch) => {
        try {
            dispatch({
                type: 'SHOW_LOADER'
            });
            await axios.post('http://5cf909a3e3c79f001439b380.mockapi.io/api/users', newUser);
            dispatch(onGetUsers());
            dispatch({
                type: 'HIDE_LOADER'
            });
        }
        catch(e){
            dispatch({
                type: 'HIDE_LOADER'
            });
        };
};

export const onGetUsers = () => (dispatch) => {
        const userPromise = axios.get('http://5cf909a3e3c79f001439b380.mockapi.io/api/users');
        userPromise.then(res => {
            dispatch(onUsersReceived(res.data));
        });
};