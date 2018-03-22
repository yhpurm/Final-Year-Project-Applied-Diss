# Maps Components
Contains all the Javascript,Typescript and HTML files that create the MLABS online server related features.

### Developers:
- [Conor Tighe](https://github.com/ConorTighe1995)

## Component description
This component makes up the results display from the search feature in the navigation bar along with the online list feature that can be accessed through the navigation bar too. The search bar looks up usernames in the MLABS database then lists then lists the accounts back to the user then retunrs the results to the user, the global feature shows everyone who is avalible on the online server. Both these components is what allows the users to add people to the friends collection in there local database to view on the map or the friends list.

## Features
- Fast accurte search results.
- Mlabs Online Server: A Mongodb database hosted by Amazon Web Service.
- Local Mongodb: Pull personal posts and information from your local database.
- Add friends to view details or location on map.

## Services
- MLABS Service: This service is used to provide global users from the online server.
- Profile Service: This service allows us to add friends to your friends list.
- Activated Route: This is part of the Angular2 Router component and allow us to recieve values passed from another component, in this case the results of the navbar search from MLABs.

### Refrences
- [Activated Route](https://angular.io/api/router/ActivatedRoute)