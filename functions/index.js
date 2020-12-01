const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HtEHjCeIXxbEXGE95uV87HgFdz2VkcPNd42JjtuNbw3gYLNrRQqOh2UcohONu4mmrlUt8gzLue30oFAJ7WgNHrj00npFUC8bt");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",function(req,res){
    res.send("hey");
});

app.post("/payments/create", async(req,res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)




//(http://localhost:5001/e-clone-9c271/us-central1/api)