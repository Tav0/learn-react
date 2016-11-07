import { APIResource, buildURL } from './resource.js';

export function login({username, password}) {
  return new APIResource(buildURL('/login')).post(
    { username, password, }
  );
}

export function logout() {
    return new APIResource(buildURL('/logout'))
    .get().then(success => {
    }).catch(err=> {
        console.log(err);
    });
}

