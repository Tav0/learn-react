import api from '../api';
import apiAction from './apiAction';
import config from '../config/';

// this function is an "action creator"
// the action created, however, is a thunk.
// see apiAction.js
export function login(username, password) {
    return apiAction({
        baseType: 'LOGIN',
        fetch() {
            return api.auth.login({ username, password });
        },
        onSuccess(dispatch, data, getState) {
            console.log("Successfully logged in!");
            //console.dir(data);
            location.href = `${config.publicUrl}/`;
        },
    });
}

