import mongoose from "mongoose";
import Categorie from "./Categorie.js";
import Scategorie from "./Scategorie.js";

const ArticleSchema= mongoose.Schema({
    reference:{type:String,required:true,unique:true},
    designation:{type:String,required:true,unique:true},
    prixachat:{type:Number,required:false},
    prixvente:{type:Number,required:false},
    prixsolde:{type:Number,required:false},
    marque:{type:String,required:true},
    qtestock:{type:Number,required:false},
    caracteristiques:{type:String,required:false},
    imageartpetitf:{type:String,required:false},
    imageartgrandf:{type:Array,required:false},
    CategorieID: {type:mongoose.Schema.Types.ObjectId,ref:Categorie},
    scategorieID: {type:mongoose.Schema.Types.ObjectId,ref:Scategorie}

})
const Article = mongoose.model('Article',ArticleSchema);
export default  Article 