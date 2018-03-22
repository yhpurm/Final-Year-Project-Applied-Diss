# Maps Components
Contains all the Javascript,Typescript and HTML files that create the map related features.

### Developers:
- [Conor Tighe](https://github.com/ConorTighe1995)

## Component description
This component makes up the status and friends location display feature of the wallet by using google maps. The menu for viewing the maps and navigating to a status post is made up by the cryptomap component files. The viewMap and viewGlobalMap components decide what is displayed on the map with viewMap using just your status posts and viewGlobalMap showing everyone online. The peopleMap component then shows the locations of people on your friends list.

## Features
- Rich GUI created with bootstrap and jQuery.
- Google Maps Integration.
- Mlabs Online Server: A Mongodb database hosted by Amazon Web Service.
- Local Mongodb: Pull personal posts and information from your local database.
- Lists details when icons are clicked.

## Services
- Profile Service: This service is used to provide the locations of friends you've added in the past.
- Status Service: This service is used to provide the locations of the statuses you've posted in the past.
- Auth Service: This service was created by our group memeber Donal to secure all data passed to and from this component.

### Refrences
- [Google Maps](https://developers.google.com/maps/)