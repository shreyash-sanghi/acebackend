const mongoose = require("mongoose");


const Register = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    },
    uid:{
        type:String,
        required:true
    },

})

const register = new mongoose.model("Commit",Register);
module.exports = register;