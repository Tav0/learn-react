// public URL, put in by create-react-app's webpack config
const publicUrl = `${process.env.PUBLIC_URL}`

const menus = {
    topbar : [
        { path: `${publicUrl}/`, label: "Home" }
    ],
    leftdropdowns : [
        {
            label: "More",
            entries: [
              { path: `${publicUrl}/morestuff`, label: "Content Here" }
            ]
        }
    ],
    rightdropdowns : [
        {
            label: "My Profile",
            onlyifauthenticated: true,
            entries: [
              { path: `${publicUrl}/profile`, label: "Change My Profile" }
            ]
        },
        {
            label: "Admin",
            onlyifadmin: true,
            entries: [
              { path: `${publicUrl}/users?page=0`, label: "List All Users" }
            ]
        }
    ]
};

// To avoid same-origin issues, make API requests to origin.
// webpack devserver will proxy these requests, but you must specify
// a 'proxy' entry in package.json, see
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development
const apiPrefix = `${publicUrl}/api`
console.log(`Read configuration.  Public_URL: ${publicUrl}`)

export default { menus, apiPrefix, publicUrl }

