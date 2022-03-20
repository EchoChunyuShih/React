<h1 align="center"> Task Traker </h1>



## npm

### 1. react-icon

`npm install react-icons`

In the js file you wish to use the icon
`import { FaTimes } from "react-icons/fa";`

More details at [react-icon](https://www.npmjs.com/package/react-icons)

### 2. json-server

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



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


> This project is credited to [ReactJS Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
