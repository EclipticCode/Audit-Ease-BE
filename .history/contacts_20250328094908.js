const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    clientName : {type : String},
    companyName : { type : String},
    address : { type : String},
    email : { type : String},
    mobileNumber : { type : Number} ,
    sNo : { type : Number}
})

const ContactModel = mongoose.model("contacts" , ContactSchema)

module.exports = {
    ContactModel
}