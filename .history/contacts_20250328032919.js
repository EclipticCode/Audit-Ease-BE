const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    clientName : {type : String},
    companyName : { type : String},
    address : { type : String},
    email : { type : String},
    phoneNumber : { type : Number}
})

const ContactModel = mongoose.model("Contacts" , RegistrationSchema)

module.exports = {
    RegistrationModel
}