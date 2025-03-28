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

const UpcomingEventsSchema = new mongoose.Schema({
    no : { type : String} , 
    events : { type : String } ,
    date : { type : String },
})

const DueFeesDashboardSchema = new mongoose.Schema({
    sNo : { type : String} , 
    clientName : { type : String} , 
    firmName : { type : String} , 
    dueAmount : { type : String} , 
})

const ClientsRatingSchema = new mongoose.Schema({
      
})

const ContactModel = mongoose.model("contacts" , ContactSchema)
const ArticlesModel = mongoose.model("articles" , ArticlesSchema)
const UpcomingEventsModel = mongoose.model("upcomingevents" , UpcomingEventsSchema)
const DueFeesDashboardModel = mongoose.model("duesfeesdashboards" , DueFeesDashboardSchema)

module.exports = {
    ContactModel , 
    ArticlesModel ,
    UpcomingEventsModel , 
    DueFeesDashboardModel
   
}