const express = require('express')
const cors = require ("cors")
const bodyParser  = require ('body-parser')
const { connectDb , mongoose } = require ('./db')
require('dotenv').config();
const ContactModel = require('./contacts')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Server started and working")
})


app.get('/getContacts' , (req,res) => {
    ContactModel.find()
    res.
    .then(contacts => res.json(contacts))
    .catch(err => res.json(err))
})


app.listen(4000, () => {
    console.log("Server started at port 4000")
})