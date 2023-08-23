//design schema
//import mongoose libraray 
const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;
//create a mongoose schema with ->userSchema
const userSchema=new mongoose.Schema({
 
    //define the properties of 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

//create a model name 'User' ->userSchema
mongoose.model("User",userSchema);