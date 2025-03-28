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
    
})

const ContactModel = mongoose.model("contacts" , ContactSchema)

module.exports = {
    ContactModel
}