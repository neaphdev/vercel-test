const express = require("express");
const jwt = require('jsonwebtoken');

const app = express();


const secretKey = 'your-secret-key';


app.get("/", (req, res) => {
    res.send("Express on Vercel");
});


app.post("/login", (req, res) => {
    // Generate random token
    const payload = {
        user: '51957135245'
    };
    const token = jwt.sign(payload, secretKey);

    // Random sleep time up to 1 second
    const sleepTime = Math.random() * 300;

    setTimeout(() => {
        res.send({ access_token: token, expires_in: 600, refresh_token: "frt545*/", time: sleepTime });
    }, sleepTime);
});


app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;