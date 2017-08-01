// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';

// Exporting an object with methods for retrieving and posting data to our API
const helper = {
  // Returns a promise object we can .then() off inside our Parent component
  getEvents: function() {
  	console.log("Made it to getEvents")
    return axios.get("/api/597a1906fd390004e69fa30a");
  }
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  // saveClicks: function(clickData) {
  //   return axios.post("/api", clickData);
  // }
};

export default helper;