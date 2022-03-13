import mongoose from "mongoose";
import Categorie from "./Categorie.js";

const ScategorieSchema= mongoose.Schema({
    nomscategorie:{type:String,required:true},
    imagescat:{type:String,required:false,unique:true},
    CategorieID: {type:mongoose.Schema.Types.ObjectId,ref:Categorie}

})
const Scategorie = mongoose.model('Scategorie',ScategorieSchema);
export default  Scategorie 