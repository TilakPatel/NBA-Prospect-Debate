const mongoose = require('mongoose');

const analysis = {
    analysis: String,
    popularity: Number,
    contributor: String
};
const playerSchema = mongoose.Schema({
    name: { type: String, required: true },
    college: { type: String, required: true },
    position: { type: String, required: true },
    analysises: {type: [analysis], default: {
        analysis: 'vote for the other one',
        popularity: -100000,
        contributor: 'DEV'
    }},
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
        leadership: [Number],
        projectedDurability: [Number]
    }
    ,
    height: { type: String, required: true },
    weight: { type: Number, required: true },
    year: { type: String, required: true }

});



module.exports = mongoose.model('Player', playerSchema);
