const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")('sk_test_51Hn9DtFfxvFC7Iq0RCHgJ4roCoPMwrS3HbEp2hLXGd8jSZu4HiflGZaq2srbPODMLrqmErmD2poNN7qIJ83vueOo00NvkwIh6d')

//API
// APP config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!! forthis Ammount >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // ok -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/cloe-fc65b/us-central1/api