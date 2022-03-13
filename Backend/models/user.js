import mongoose from "mongoose";


const userSchema= mongoose.Schema({
    name:{type:String,required:true},
    telephone:{type:String,required:false,unique:true},
    email:{type:String,required:false,unique:true},
    password:{type:String,required:true},
    register_date:{type:Date,required:false}

})
const user = mongoose.model('user',userSchema);
export default  user