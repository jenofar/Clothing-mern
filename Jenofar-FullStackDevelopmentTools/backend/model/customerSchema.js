import mongoose from 'mongoose';

const customerSchema= new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})

var Customer=mongoose.model('Customer',customerSchema)

export default Customer