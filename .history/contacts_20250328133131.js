const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    clientName : {type : String},
    companyName : { type : String},
    address : { type : String},
    email : { type : String},
    phoneNumber : { type : String} ,
    sNo : { type : Number}
})

const ArticlesSchema = new mongoose.Schema({
    sNo : { type : String} , 
    name : { type : String } ,
    tasksAssigned : { type : String },
    deadline : { type : String },
    pastTask : { type : String },
})

const upcomingEventsSchema = new mongoose.Schema({
    no : { type : String} ,
    events : { type : String} ,
    date : { type : String} ,
})

const ContactModel = mongoose.model("contacts" , ContactSchema)
const ArticlesModel = mongoose.model("articles" , ArticlesSchema)
const upcomingEventsModel = mongoose.model("upcomingEvents" , upcom)

module.exports = {
    ContactModel , 
    ArticlesModel
}