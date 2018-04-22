# Login Components
Contains all the Javascript,Typescript and HTML files that creates new users, logs users into the application, welcome and home components that the users are first introducted to when they successfully log into the application.

### Developers:
- [Donal McGahon](https://github.com/DonalMcGahon)

## Components description
The register.components allow users to create an account with the application and their details are securely saved to mongodb to be used later in the application. The login.compoment is used to log registered users into the application. They can do this by entering their details they registered with and logs the user in. The welcome.component is the opening page of the application and displays the necessary they need to see. The only options the user has in this component is to log int or register with the application. If the user is logged in, instead of being given the option to log in or register, they have the option to view their profile. The home.component allows the user to navigate to 4 different parts of the application. These are the users profile, news component, maps or trading component.

## Features
- Create new users of the application.
- Log in users to the application.
- Stores user information to mongo.
- Welcome page of application.
- Navigates users to parts of application.

## Services
- Authentaication Service: Saves users information to mongoDB