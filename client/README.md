
Starter template for Project 1, Phase 1.

This directory contains a React "starter" app created with create-react-app.

To use it, you must first set up your user API running on port 3001
(or change package.json) using pm2.  (Be sure to create a new database
and specify it in the config/default.json file after creating the tables
in it.)

In addition, the following changes are necessary to your exercise 5 solution:

- the /api/login POST point should return a full user object (id, username, email, ...)
  but not including password.

- create an /api/login GET entry point which returns JavaScript.
  If the user is not authenticated, it should return `var authState = { };`
  If the user is authenticated, it shoudl return `var authState = { id: ..., username: ..., }`
  the same way /api/users/:id would.
  Be sure to use res.setHeader('content-type', 'text/javascript') followed by res.send()

- implement an /api/logout point that calls passport's req.logout() function.

- OPTIONAL for now: to allow newly registered users to be automatically logged in, place
  the registration code in a passport.authenticate block and return a full user
  object there as well.


The code given is my implementation with various pieces "ripped out," which are marked
as "implement me".  This suggests a code structure which you can, but do not have to
follow.

You should implement:
- user login
- user sign up
- logout
- paginated display of the user list for admin users 
    (you can use mysql to appoint an admin user, also, feel free to import users to
    test paging for more than 10 users)
- a page where the user can change their profile information and password
- proper form validation. At least: check that passwords match, check that
    password is longer than 6 chars.

I have included reducers for state.auth and state.admin that use a particular way of
keeping track of data client-side. Use the redux-tools to see what they look like.
This is certainly not the only way of representing data client-side, feel free to make
changes as you see fit.  If you adopt the same representation, you may need to make
few or no changes to reducers/

I would like everyone to have a working infrastructure they have completed.
This project needs to be fully implemented before we can move forward!

