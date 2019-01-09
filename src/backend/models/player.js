const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: { type: String, required: true },
    college: { type: String, required: true },
    position: { type: String, required: true },
    analysises: [{ analysis: String, popularity: Number, _id: false }],
    attributes: [
        { athleticism: [Number] },
        { defense: [Number] },
        { shooting: [Number] },
        { nba_ready: [Number] },
        { dribbling: [Number] },
        { potential: [Number] },
        { passing: [Number] },
        { motor: [Number] },
        { leadership: [Number] },
        { maturity: [Number] }
    ]

});

module.exports = mongoose.model('Player', playerSchema);
