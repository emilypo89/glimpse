// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';

// Exporting an object with methods for retrieving and posting data to our API
const helper = {
  // Returns a promise object we can .then() off inside our Parent component
  getEvents: function(currentGroup) {
    let url = "/group/api/" + currentGroup;
  	console.log("Made it to getEvents");
    return axios.get(url);
  },

  newGroup: function (groupData) {
    return axios.post("/group", groupData)
  }
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  // saveClicks: function(clickData) {
  //   return axios.post("/api", clickData);
  // }
};

export default helper;