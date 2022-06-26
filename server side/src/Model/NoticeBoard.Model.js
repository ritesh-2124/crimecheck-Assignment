const mongoose = require("mongoose");


const NoticeSchema = new mongoose.Schema({
    User_id :{type:mongoose.Schema.Types.ObjectId, ref: 'user'  ,required:true},
    Notice :{type:String , required:true}
},
{
    versionKey: false, // after set to false , because it is used to avoid the "__v" field
    timestamps: true // after set to true , it will add the "createdAt" and "updatedAt" field
  })

module.exports  = mongoose.model("notice",NoticeSchema);