import mongoose from "mongoose";


const commandeSchema= mongoose.Schema({
    refcommande:{type:String,required:true},
    dateachat:{type:Date,required:false,unique:true}, 
    mt_total:{type:Number,required:false},
    paye:{type:Number,required:false}

})
const commande = mongoose.model('commande',commandeSchema);
export default  commande