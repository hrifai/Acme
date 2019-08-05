const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin:true}));

// // https://firebase.google.com/docs/functions/write-firebase-functions

app.post('/authenticateUser', (req, res) => {
    const email = req.query.email;
    const pass = req.query.password;
    const users = [];
    functions.database.ref('/Users').forEach(user => {
        users.push(user.val())
    });

    var payload = {};
    var filter = users.filter(user => user.email === email && user.password === pass)

    payload.user = filter[0];
    payload.result = filter.length > 0;

    res.send(payload);
});

exports.endpoints = functions.https.onRequest(app);



// exports.authenticateUser = functions.https.onRequest((req, res) => {
//     const email = req.query.email;
//     const pass = req.query.password;
//     const users = functions.database.ref('/Users').val();
//
//     var payload = {};
//     var filter = users.filter(user => user.email === email && user.password === pass)
//
//     payload.user = filter[0];
//     payload.result = filter.length > 0;
//
//     res.send(payload);
// });
