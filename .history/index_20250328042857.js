const express = require('express')
const cors = require ("cors")
const bodyParser  = require ('body-parser')
const { connectDb , mongoose } = require ('./db')
require('dotenv').config();
const ContactModel = require('./contacts')

const app = express()
app.use(cors())
app.use(bodyParser.json())
connectDb()
app.use(express.json())

app.get('/', (req,res) => {
    if(mongoose.connection.readyState === 1){
        res.send("Server working fine and connected to Database successfully")
        return;
    }
    res.send("Server working fine")
})


mongodb+srv://jananib6:Janani2000@cluster0.4h2ombp.mongodb.net/


app.listen(4000, () => {
    console.log("Server started at port 4000")
})