 /** 
  * ! Main comment section for step by step guide to project. 
  *?    Step one set up the file structures needed for my application. Added a 'Components', 'Reducers', and 'Actions' file to my 'src' folder. 
  *?    Follow read me instructions to set up the project. Fork and clone the repo to my documents folder. Open in VS code. Open new terminal. RUN npm install. RUN npm start. Get API running... Open Chrome and naviagte to the local host server. This displays a Smurf Array. 
  *?    Open src.index.js. ... 
  * TODO:   Make sure index.js file is ready to go with middleware?...
  *?   CD into the smurfs and RUN npm install. RUN npm start. Follow the promting "Welcome to your state management version of Smurfs! Start inside of your `src/index.js` file! Have fun!"
  * TODO:   Look inside of the server.js file. This file has the info for the API. Plan out my state management. Fetch data from the smurf server API. Display the data in the main component. Next create a form to allow us to add a new smurf to the village. Smurf must have a name, age, height, and if desired and ID. 
  * TODO: Style my App with Styled Components
  
  * * 1. Install needed dependencies. redux, react-redux, redux-thunk, & axios).

  * * 2. Add all imports inside of the index.js file. 
  * 
  * * 3. The app is our "Top level coponent". We are going to use this file to render all of our components. This part of the App will have a button that takes you into the smurf village. :)
  * 
  * * 4. Create the main store function. This is going to house our store. With our store we want to make sure that any parent, or container components, we build will have access to it. Navigate to the index,js file. Import the provider component into the index.js file. NOW WRAP THE MAIN APP COMPONENT IN THE PROVIDER COMPONENT. Found in the index.js file. Pass in the store compoenet as prop set equal to the store created. 
  * 
  * * 5. Create the first component. This one will be our form component called postForm.js. Then import connect to react redux. Follow suit with the second component. Remember that the components will be rendered, the actions will handle the API and the clicks, and any other actions our user might experience. 
  * 
  * * 6. If we want to bring any of our state over to our compoenet (our form will need access to our compoent) we will need to 'map state to props'. Create a map state to props function to handle that task. We then need to pass in our state ito this function that we want to bring over to our map function. 
  * 
  * * 7. Create a file in the actions folder called "FormActions". This action file is going to render our initial state, update our form when a new smurf is put in, and it will submit said form to add the new smurf to the array. 
  * 
  * * 8. Set up a seperate file to house the Smurf API. In this file we will create an axios call to gather our smurf info from the server. This axios call contains our dispatch, get request, and our action variables. 
  * 
  * * 9. We will also need to make a post request to get our App to work. 
  * 
  * * 10. 
  * 
  * * 11.
  * 
  * * 12.
  * 
  * * 13.
  * 
  * * 14. 
 */