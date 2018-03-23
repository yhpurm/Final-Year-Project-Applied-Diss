# Maps Components
Contains all the Javascript,Typescript and HTML files that create the profile page and friends list.

### Developers:
- [Conor Tighe](https://github.com/ConorTighe1995)
- [Donal McGahon](https://github.com/DonalMcGahon)

## Component description
This component makes up the social media features of the application, the profile component uses the information entered by the user during registration and displays it on a modern GUI. The profile component reaches into the different status collections stored in mongodv and lists them on the profile page using a ngFor loop, from here they can be deleted if the user decided they no longer want that post publicly displayed on the page. The friends components take all the users added to the collecton of the profile friends lists and displays them with ngFor and an accordian list to expose information the logged in user countnt see about the account before they added them.

## Features
- Rich user GUI with alot of interaction.
- Status posts displayed, can be deleted.
- Twitter feed listed on side of page.
- friends listed in accordian list that exposes details of the account.

## Services
- Status Service: This service is used to provide all the users status posts about bitcoin and the blockchain.
- Profile Service: This service retrieves all your personal and wallet details.

### References