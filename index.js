const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
// require('./routes/api/register');



mongoose.connect(
    db, {
        useNewUrlParser: true, useUnifiedTopology: true
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
)

// Route paths
const User = require('./models/studentdata');

const userInput = {
    id: "2014100000052",
    password: "shafiq123",
    stdname : "Shafiqul",
    role: "student",
    batch: "37"
}

const user = new User(userInput);
user.save((document) => {
    console.log(document);
});


// To deploy on heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);