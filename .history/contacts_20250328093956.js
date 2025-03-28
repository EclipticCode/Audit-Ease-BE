const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    clientName : {type : String},
    companyName : { type : String},
    address : { type : String},
    email : { type : String},
    phoneNumber : { type : Number} ,
    s.No : { type : Number}
})

const ContactModel = mongoose.model("contacts" , ContactSchema)

module.exports = {
    ContactModel
}