// Include the Mongoose Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
const GroupSchema = new Schema({
  groupName: {type: String},
  groupDescription: {type: String},
  events: [{
  	title: String,
  	start: String,
  	end: String,
  	desc: String
  }],
  users:[{ type: Schema.Types.ObjectId, ref: "User"}]
});

// Create the Model
const Group = mongoose.model("Group", GroupSchema);

// Export it for use elsewhere
module.exports = Group;