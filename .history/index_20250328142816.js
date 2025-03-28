const express = require('express')
const cors = require ("cors")
const bodyParser  = require ('body-parser')
const { connectDb , mongoose } = require ('./db')
require('dotenv').config();
const {ContactModel , ArticlesModel , UpcomingEventsModel} = require('./contacts')

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



app.get('/getContacts', async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        console.log(contacts)
        res.json(contacts);
    } catch (err) {
        console.error("Error fetching contacts:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/getArticles', async (req, res) => {
    try {
        const contacts = await ArticlesModel.find();
        console.log(contacts)
        res.json(contacts);
    } catch (err) {
        console.error("Error fetching contacts:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/upcomingEvents' , async(req , res) => {
    try {
        const UpcomingEvents = await upcomingEventsModel.find();
        console.log(UpcomingEvents)
        res.json(upcomingEvents);
    } catch(err){
        console.error("Error fetching Events data:" , err);
        res.status(500).json({ error: err.message });
    }
})


app.listen(4000, () => {
    console.log("Server started at port 4000")
})