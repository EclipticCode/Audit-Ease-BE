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

const ContactModel = mongoose.model("contacts" , ContactSchema)
const ArticlesModel = mongoose.model("articles" , ArticlesSchema)

module.exports = {
    ContactModel , 
    Art
}