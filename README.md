# RAD-Group-Assignment
# Library Management System (UCSC)

This is a sample web app to manage books and users. Issue books and returning of pre-issued books are also covered by this system.

###                   Users & Functionalities
### Student
* register to the app
* view and edit profile
* change password
* search books and view availabilty
* view issue history

### Admin
* view and edit profile
* search for books and view availability
* view, Edit or Delete existing books
* add new books
* issue a book
* return a book issued earlier
* view all stats of the library
* view issue log and the profile of students
* view the profile of all admins 

### Created with MERN Stack

* [MongoDB](https://docs.mongodb.com/) - Document database - to store data as JSON 
* [Express.js](https://devdocs.io/express/) - Back-end web application framework running on top of Node.js
* [React](https://reactjs.org/docs/) - Front-end web app framework used
* [Node.js](https://nodejs.org/en/docs/) - JavaScript runtime environment 

### Middleware

* [Redux](https://redux.js.org/basics/usage-with-react) - For flux architecture, and fetching rapidly data
* [Mongoose](https://mongoosejs.com/docs/guide.html) - ODM for MongoDB

## Steps followed to setup the project

# Setting up server and database

1. Initialise a package.json file by entering the following command in terminal, after getting into the project directory :

```(bash)
npm init
```

2. Install npm packages required for backend side :

```(bash)
npm install
npm i -D nodemon
```

### Setting up the client

1. Create a folder 'client' in the project directory. Ensure that you have create-react-app CLI installed. Enter the following commands in terminal :

```(bash)
cd client
create-react-app .
cd ..
```

2. In the package.json of the server, add the following scripts :

```(JSON)
"client-install": "npm install --prefix client",
"client": "npm start --prefix client",
```

3. Install Redux for maintaining the state :

```(Terminal)
npm i redux react-redux redux-thunk
```
4. start project
```
npm start
```
