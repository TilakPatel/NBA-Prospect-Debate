const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: { type: String, required: true },
    college: { type: String, required: true },
    position: { type: String, required: true },
    analysises: [{ analysis: String, popularity: Number, _id: false }],
    attributes: {
        athleticism: [Number],
        size: [Number],
        defense: [Number],
        shooting: [Number],
        nba_ready: [Number],
        dribbling: [Number],
        potential: [Number],
        passing: [Number],
        intangibles: [Number],
        leadership: [Number]
    }
    ,
    height: String,
    weight: Number,
    year: String

});

module.exports = mongoose.model('Player', playerSchema);
