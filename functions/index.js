const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { onRequest } = require("firebase-functions/v1/https");
const stripe = require('stripe')('sk_test_51N4LF4SEn0h2oK84d7gcoZqS64eFfnc8Zx4HndTrxsur56PBpmTFwv0Tg3ssBEoTV3t1R4d8ywjmBXDq84zQMBhE00rVl8xAa2');

//API


//-App config

const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/',(req,res)=>res.status(200).send('hello World'));

app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;
    console.log('Payment Request Recived',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });
    response.status(201).send({
        clientsecret: paymentIntent.client_secret,
    })
})
// listen command
exports.api = functions.https.onRequest(app);
