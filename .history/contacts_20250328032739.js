const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    clientName : {type : String},
    companyName : { type : String},
    address : { type : String},
    
})