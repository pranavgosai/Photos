const mongoose = require("mongoose");

const costmerSchema = new mongoose.Schema({
    FirstName:{
      type:String
    },
    LastName:{
        type:String
      },
      Email:{
        type:String
      },
      Subject:{
        type:String
      },
      Message:{
        type:String
      }   
});


const Register = new mongoose.model("Custmer",costmerSchema);

module.exports=Register;