const express = require("express");

const app = express();
const crypto = require('crypto');

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});


app.post("/login", (req, res) => {
    // Generate random token
    const token = crypto.randomBytes(64).toString('hex');

    // Random sleep time up to 1 second
    const sleepTime = Math.random() * 400;

    setTimeout(() => {
        res.send({ token: token, time: sleepTime});
    }, sleepTime);
});


app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;