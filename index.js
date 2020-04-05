const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose.connect(
    db, {
        useNewUrlParser: true
    },
    () => {
        console.log("MongoDB is connected");
    },
).then(
    () => {
        app.get('/db', (req, res) => {
            res.send({
                Hey: 'Database is UP'
            });
        });
    }
);

app.get('/', (req, res) => {
    res.send({
        Hey: 'There'
    });
});

// To deploy on heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);