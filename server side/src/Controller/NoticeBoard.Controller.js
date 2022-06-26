const express = require('express');
const Router = express.Router();


const Notice = require('../Model/NoticeBoard.Model');


Router.get("" , async(req , res) =>{
  try {
      const notice = await Notice.find().populate({  path: 'User_id',
      select: ['User_id'] }).lean().exec()
      res.send(notice)
  } catch (error) {
      res.status(201).send(error)
  }
})

Router.post("" , async(req,res)=>{
  const notice = await Notice({
    User_id : req.body.User_id,
    Notice : req.body.Notice
  });
  notice.save()
  .then(data=>{
    res.send(data);
  }).catch(err=>{
    res.send(err);
  }
  );
})

module.exports = Router;