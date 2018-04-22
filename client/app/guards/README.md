# Auth Guard Components
Contains all the Javascript and Typescript files used to ensure  the security of the application from unregistered users.

### Developers:
- [Donal McGahon](https://github.com/DonalMcGahon)

## Component description
These guards are used to prevent unregistered users from accessing the application. They stop users from accessing the application by attempting to reach a URL they have no right to access. Also used for registered users and what they are allowed to access when logged into the application.

## Features
- Keeps unwanted users from accessing routes in the application they are not allowed to access.
- Ensures that logged in users only have access to certain routes of the application.
- Redirects users back to the route they were trying to access when they enter their log in details.

### Refrences
[Auth Guards](https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3)