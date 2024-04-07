const express = require("express");
const router = express();
const  Register = require("../models/Register")

//Sign Up 
router.post("/message",async(req,res)=>{
    try {
      console.log("Hello")
       const {uid,Name,inimessage} = req.body;
       console.log(uid,Name,)
      const response =   await Register.create({
        uid,Name,Message:inimessage
       })
       console.log(response)
     res.sendStatus(202);
    } catch (error) {
        console.log(error);
       res.status(404).send(error);
    }
   })

module.exports = router;