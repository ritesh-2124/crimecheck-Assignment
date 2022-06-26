const express = require('express');
const Router = express.Router();

const User = require('../Model/User.Model');


Router.get("" , async(req,res)=>{
    await User.find()
    .then(data=>{
      res.send(data);
    }).catch(err=>{
      res.send(err);
    }
    );
  });


  Router.post("/register",async(req,res)=>{
    try {
        let user = await User.findOne({ User_id: req.body.User_id }).lean().exec();
        if (user)
            return res.status(400).send({ message: "Please try another  user Name" });
        user = await User.create(req.body);
        return res.status(201).send(user)
    } catch (error) {
       return res.status(500).send(error.message)
    }
})
Router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({ User_id: req.body.User_id });
        if (!user){
            return res
                .status(400)
                .send({ message: "Please try another  user Name" });
        }
        else{
            return res.status(200).send(user)
        }
    } catch (error) {
       return res.status(500).send(error.message)
    }
})

module.exports = Router;