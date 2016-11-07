import api from '../api';
import apiAction from './apiAction';
import config from '../config/';

export function register({ username, firstname, lastname, password, email }) {
    return apiAction({
        baseType: 'REGISTER',
        fetch() {
            return api.user.register({
                username,
                firstname,
                lastname,
                password,
                email
            });
        },
        onSuccess(dispatch, data, getState) {
            console.log("registered successfully!");
            //console.dir(data);
            location.href = `${config.publicUrl}/`;
        }
    });
}

export function updateProfile(id, { username, firstname, lastname, password, email }, onSuccess) {
    return apiAction({
        baseType: 'UPDATE',
        fetch() {
            let user = username || '',
                fname = firstname || '',
                lname = lastname || '',
                pass = password || '',
                mail = email || ''

            return api.user.updateProfile(
                id,
                {user, fname, lname, pass, mail},
                onSuccess);
        },
        onSuccess(dispatch, data, getState) {
            console.log('updated');
        }
    });
}

export function getProfile(id) {
/*
 * Implement FETCH_PROFILE.
 */
}

export function listusers({ page }) {
/*
 * Implement FETCH_USER_LIST.
 */
}
