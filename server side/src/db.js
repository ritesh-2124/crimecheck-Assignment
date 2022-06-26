const mongoose = require("mongoose")



 const connect = ()=>{
    return mongoose.connect("mongodb+srv://Ritesh2124:ritesh1234@cluster0.w0rme.mongodb.net/crimechake?retryWrites=true&w=majority")
}

module.exports = connect