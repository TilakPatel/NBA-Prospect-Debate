const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: { type: String, required: true },
    imageURL: {type: String, required: true},
    
});

module.exports = mongoose.model('Player', playerSchema);
