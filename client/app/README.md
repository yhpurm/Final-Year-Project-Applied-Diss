# Angular2/5 App
This folder contains all the code that makes up the Angular application. The features and pages are divided into components that have been sorted into folders above. These components are loaded through the ../views/index.html page as frames which allows for high performace and fast loading times.

## Navigation bar
the app.components make up the navbar which is loaded at the top of the view when the app starts. This bootstrap component is what allows us to easily access routes and search MLABS on any page. This navigation bar also tracks what user is currently logged in and will change state depending on the login token status.

## Angular Modules
The app.module.ts file is what tells Angular about the Typescript, Javascript and HTML files we have created for our app so they are loaded throught the NgModule on start up along with prepring any imports we need. An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime. It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them. @NgModule can also add service providers to the application dependency injectors.

## Angular Routing
The app.routing.ts file take care of component naviagtion by connecting components to application URLs. This is also where the Auth Gaurd is applied to protect the routes from unauthorized access.

## Compileing Angular with Main.js
The main.ts file is the entry point of the application , compiles the application and bootstarps the application . Angular can be bootstrapped in multiple environments we need to import a module specific to the environment. This file basically controls the start up of the app.

### References
- [NgModule](https://angular.io/guide/ngmodules)