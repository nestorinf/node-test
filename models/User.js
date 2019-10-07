
const mongoose = require('mongoose');

const {mongo} = require('../config');

mongoose.connect(mongo.URI, {useNewUrlParser: true});
const Schema = mongoose.Schema;

const badge_child = new Schema({
   
       firstName: { type: String },
        lastName:  { type: String },
        email:     { type: String },
        twitter:   { type: String },
        jobTitle:  { type: String },
        avatarUrl: { type: String },
      
});


const badges = new Schema({
    badge: [badge_child]
});

 module.exports = mongoose.model('badges', badges); 