# Task Traker

This project is a react practice by [ReactJS Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

## npm

### react-icon

`npm install react-icons`

In the js file you wish to use the icon
`import { FaTimes } from "react-icons/fa";`

More details at [react-icon](https://www.npmjs.com/package/react-icons)

### json-server

` npm i json-server`

1. `json-server --watch db.json` to start JSON Server
2. set port `"server": "json-server --watch db.json --port 5000"` in package.json
3. `npm run server` you will find the following message :
   > Resources
   > http://localhost:5000/tasks
   >
   > Home
   > http://localhost:5000
4. edit db.json: move data from App.js (remember in json format, key and value should both be wrapped in "", and no comma at the end of each object) to db.json

   - for example:

     - in App.js

     ```
     tasks=[{
         id: 1,
        text: "Dentists Appointment",
         day: "Jan 13 at 2:30pm",
         reminder: true,
       }]
     ```

     - whereas in db.json

     ```
     {
     "tasks": [
       {
         "id": 1,
         "text": "Dentists Appointment",
         "day": "Jan 13 at 2:30pm",
         "reminder": true
       }
     ```

### react-icon

`npm install react-icons`

In the js file you wish to use the icon
`import { FaTimes } from "react-icons/fa";`

More details at [react-icon](https://www.npmjs.com/package/react-icons)

### json-server

` npm i json-server`

1. set port `"server": "json-server --watch db.json --port 5000"`
2. `npm run server` you will find the following message :
   > Resources
   > http://localhost:5000/tasks
   >
   > Home
   > http://localhost:5000
3. edit db.json: move data from App.js (remember in json format, key and value should both be wrapped in "", and no comma at the end of each object) to db.json

   - for example:

     - in App.js

     ```
     tasks=[{
         id: 1,
        text: "Dentists Appointment",
         day: "Jan 13 at 2:30pm",
         reminder: true,
       }]
     ```

     - whereas in db.json

     ```
     {
     "tasks": [
       {
         "id": 1,
         "text": "Dentists Appointment",
         "day": "Jan 13 at 2:30pm",
         "reminder": true
       }
     ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
