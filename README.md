# Inscryptr README
Welcome to the README for Inscryptr! You can find the site hosted live at https://inscryptr.herokuapp.com.
Inscryptr is a clone of Flickr, a photo sharing service. The twist with Inscryptr is that Instead of sharing photos
and albums, users are instead sharing Cards and Tribes based on the game 'Inscryption'. Users can create, edit, and delete cards, and create, edit, and add cards to tribes.

## Index
- Features
- Components
- Schema
- Frontend Routes
- API Routes
- Redux Store Tree
- Screenshots
- How to build & run Inscryptr
- Technologies
- Planned Features
- Technical Implementation Details

## Features
### Sign Up
Users can login and create accounts and any cards or tribes they make will remember who it was that made them.
### Navigation Bar
A navigation component is always visible anywhere on the application for quick and easy browsing to any component.
### Demo User
A convenient Demo User button is available to those who want to skip the registration process and login with a pre-made account with a few sample cards tied to it.
### Cards
Users may create their own cards and define key stats for them such as their Cost, Cost Type, Description, and which tribe they belong to.
### Tribes
Tribes function a lot like  a photo album! Cards that are set to belong to a certain tribe can be viewed by clicking on their respective tribe icon. It will only show cards belonging to that respective tribe.

## Components
- CardDetails - /cards/:cardId
- Cards - /cards
- CreateCard - /cards/new
- LoginFormPage - /login
- Navigation - (All Routes)
- SignupFormPage - /signup
- SplashPage - /
- TribeCollection - /tribes/:tribeId/cards
- TribeEdit - /tribes/:tribeId
- Tribes - /tribes
## Database Schema
![enter image description here](https://camo.githubusercontent.com/2b7d2663ef1f79741eecd629ec0b9a38f25a89c3c8e4c98d1a5616f9799dc9a6/68747470733a2f2f692e696d6775722e636f6d2f3035546d4261662e706e67)
## API Routes
### All routes begin with /api/
### __/cards__
- GET cards/ - Fetch all cards in the DB
- GET cards/:cardId - Fetch a card by Id
- PUT cards/:cardId - Update card details
- POST cards/ - Create new card
- DELETE cards/:cardId - Delete a card
### __/tribes__
- GET /tribes - Fetch all tribes
- GET /tribes/:tribeId/cards - Fetch all cards who belong to this tribe
- GET /tribes/:tribeId - Get details for a tribe
- POST tribes/ - Create new tribe
- PUT tribes/:tribeId - Update a tribe's details
### __/users__
- POST users/ - Create new user
### /session
- POST session/ - Login user
- DELETE  session/ - Logout user
- GET session/ - Restore Session
## Redux Store Tree

```
store = {
       session: {},
       tribes: {
	       id,
	       name,
	       },
	   cards: {
		       name,
		       cost,
		       costType,
		       description,
		       tribeid
		       },
	   OneCard: { ...cardData  },
}
```
## Installation
1. Clone Inscryptr
2. ```cd``` into the ```/backend``` folder.
3. run ```npm install ```
4. run ```npm build``` to start the backend express server on port 5000 in production mode
5. In a seperate terminal, ```cd``` into the ```/frontend``` folder
6. run ```npm install ```
7. run ```npm build``` to start the frontend react server on port 3000 in production mode
8. If it does not automatically open a browser window, navigate to ```localhost:3000``` to access the app.
  ## Technologies Used
  ![](https://img.shields.io/badge/-HTML-5555ff?style=flat-square&logo=html5&logoColor=FFFFFF) ![](https://img.shields.io/badge/-CSS-5555ff?style=flat-square&logo=css3&logoColor=FFFFFF) ![](https://img.shields.io/badge/-JS-5555ff?style=flat-square&logo=javascript&logoColor=FFFFFF)  ![](https://img.shields.io/badge/-React-5555ff?style=flat-square&logo=react&logoColor=FFFFFF) ![](https://img.shields.io/badge/-VScode-5555ff?style=flat-square&logo=visual-studio-code&logoColor=FFFFFF)
![](https://img.shields.io/badge/-Express-5555ff?style=flat-square&logo=express&logoColor=ffffff)  ![](https://img.shields.io/badge/-Redux-5555ff?style=flat-square&logo=redux&logoColor=ffffff)  ![](https://img.shields.io/badge/-Postgres-5555ff?style=flat-square&logo=sequelize&logoColor=ffffff)  ![](https://img.shields.io/badge/-GitHub-5555ff?style=flat-square&logo=github&logoColor=ffffff)
## Technical Details
Inscryptr was built with Redux as it's state management system. While arguably overkill for a project of it's size, it's utilization has undoubtedly sharpened my skills in it's utilization.


 Due to time constraints, I was unable to resolve a way for users to reliably upload images to the app and serve them to other users. Instead, I opted to simply allow user's to provide a direct link to their image hosted by other sites such as Imgur.com which is where the seeder cards and tribes have their icons stored at.

Cards and Tribes lists are populated by mapping JSX elements from an array of POJOS returned by a fetch call to the backend.
## Planned Features
 - [ ] Users are only able to modify cards that they have created
 - [ ] Users can alternatively upload images directly to the app
 - [ ] Users can search cards by name
 - [ ] Users can delete tribes
 - [ ]  Confirmation prompt on card deletion
 - [ ] Users can leave comments on cards

## Screenshots
### Splash Page
![splashPage](https://i.imgur.com/HekZPQg.png)
### Cards
PLACEHOLDER
### Tribes
PLACEHOLDER

