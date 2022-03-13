import mongoose from "mongoose";
import Article from "./Article.js";
import commande from "./commande.js";


const panierSchema= mongoose.Schema({
    refcommande:{type:mongoose.Schema.Types.ObjectId,ref:commande},
    refarticle:{type:mongoose.Schema.Types.ObjectId,ref:Article},
    qte_ach:{type:Number,required:false},
    remise:{type:Number,required:true},
    prix_unit:{type:Number,required:false},
    tot_ligne:{type:Number,required:false}

})
const panier = mongoose.model('panier',panierSchema);
export default  panier