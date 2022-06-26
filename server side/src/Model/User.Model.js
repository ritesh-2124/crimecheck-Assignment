const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
  User_id :{type:String , required:true , unique:true} 
},{
  versionKey: false, // after set to false , because it is used to avoid the "__v" field
  timestamps: true // after set to true , it will add the "createdAt" and "updatedAt" field
})

module.exports = mongoose.model('user',userSchema);
