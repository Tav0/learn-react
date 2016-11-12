import api from '../api';
import apiAction from './apiAction';
//import config from '../config/';
import { browserHistory } from 'react-router';

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
            browserHistory.replace(`/login`);
        }
    });
}

export function updateProfile(id, { username, firstname, lastname, password, email }) {
    return apiAction({
        baseType: 'UPDATE_PROFILE',
        fetch() {
            return api.user.updateProfile(
                id,
                { username, firstname, lastname, password, email });
        },
        onSuccess(dispatch, data, getState) {
            console.log('updated');
        }
    });
}

export function getProfile(id) {
    return apiAction({
        baseType: 'FETCH_PROFILE',
        fetch() {
            return api.user.getProfile(id);
        }
    });
}

export function listusers({ page }) {
    return apiAction({
        baseType: 'FETCH_USER_LIST',
        fetch() {
            return api.user.listusers(page);
        }
    });
}
