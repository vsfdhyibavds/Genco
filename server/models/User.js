const mongoose=require('mongoose')


const UsersSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        uppercase:true
    },
    last_name:{
        type:String,
        required:true,
        uppercase:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

module.exports=mongoose.model('User',UsersSchema)