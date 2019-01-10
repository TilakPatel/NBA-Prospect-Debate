const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Player = require('./models/player');
mongoose.connect('mongodb+srv://tilak:Basketball23@cluster0-tjkfz.mongodb.net/test?retryWrites=true').then(() => {
    console.log('Connected!');
}).catch(() => {
    console.log('Error');
});
app.use(bodyParser.json({
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/player', (req, res) => {
    console.log(req.body)
    const player = new Player({
        name: req.body.name.toLowerCase(),
        college: req.body.college,
        position: req.body.position,
        weight: req.body.weight,
        height: req.body.height,
        year: req.body.year,
        projectedDurability: req.body.projectedDurability
    });
    player.save();
    res.status(200).send({ 'success': 'success' });
})

app.post('/attributes', (req, res) => {
    name = req.body.name.toLowerCase();
    console.log(name);
    Player.findOneAndUpdate({ name: name },
        {
            $push: {
                'attributes.athleticism':
                    req.body.athleticism,
                'attributes.size':
                    req.body.size,
                'attributes.defense':
                    req.body.defense,
                'attributes.shooting':
                    req.body.shooting,
                'attributes.nba_ready':
                    req.body.nba_ready,
                'attributes.dribbling':
                    req.body.dribbling,
                'attributes.potential':
                    req.body.potential,
                'attributes.passing':
                    req.body.passing,
                'attributes.intangibles':
                    req.body.intangibles,
                'attributes.leadership':
                    req.body.leadership,
                'attributes.projectedDurability':
                    req.body.projectedDurability

            }
        },
        { safe: true, upsert: true },
        function (err, doc) {
            if (err) {
                res.status(400).send({ 'message': 'error' });
            } else {
                res.status(200).send({ 'success': 'success' });
            }
        }
    );
})
app.post('/getPlayer', (req, res) => { //takes in name of player
    console.log(req.body);
    Player.find({ name: req.body.name.toLowerCase() }, function (err, docs) {
        if (docs) {
            res.status(200).send(docs[0]);
        } else {
            res.status(400).send({ 'message': 'error' });
        }

    });
})

app.post('/analysis', (req, res) => {
    analysis = req.body.analysis;
    contributor = req.body.analysisContributor;
    playerName = req.body.playerName.toLowerCase();

    Player.findOneAndUpdate({ name: playerName },
        {
            $addToSet: {
                'analysises':
                {
                    contributor: contributor,
                    analysis: analysis,
                    popularity: 0
                }

            }
        },
        { safe: true, upsert: true },
        function (err, doc) {
            if (err) {
                res.status(400).send({ 'message': 'error' });
            }
            res.status(200).send({ 'success': 'success' });
        }
    );
})

app.get('/randomPlayer', (req, res) => {
    Player.count().exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)

        // Again query all users but only fetch one offset by our random #
        Player.findOne().skip(random).exec(
            function (err, result) { //result is random player
                if (err) { res.status(400).send({ 'message': 'error' }); } else {
                    res.status(200).send(result);
                }
            })
    })
})

app.put('/articleVote', (req, res) => {
    console.log(req.body)
    Player.findOneAndUpdate({ 'name': req.body.name.toLowerCase(), "analysises._id": req.body.articleID },
        { $inc: { "analysises.$.popularity": 1 } },
        { safe: true, upsert: true },
        function (err, doc) {
            if (err) {
                res.status(400).send({ 'message': 'error' });
            }
            res.status(200).send({ 'success': 'success' });
        }
    );
})




// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);