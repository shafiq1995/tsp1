const express = require('express');
const app = express();


app.get('/home', (req, res) => {
    res.send({Hi: 'There'});
});

// To deploy on heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);