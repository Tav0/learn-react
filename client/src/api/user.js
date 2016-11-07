import { APIResource, buildURL } from './resource.js';

export function register({ username, firstname, lastname, password, email })
{
    return new APIResource(buildURL( `/users` )).post(
        { username, firstname, lastname, password, email }
    );
}

export function updateProfile(id, { username, firstname, lastname, password, email })
{
    return new APIResource(buildURL( `/users/${id}` )).put(
        {
            username,
            firstname,
            lastname,
            password,
            email
        }
    );
}

export function getProfile(id)
{
    // implement
}

export function listusers({ page })
{
    // implement
}

