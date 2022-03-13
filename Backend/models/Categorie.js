import mongoose from "mongoose";
const CategorieSchema= mongoose.Schema({
    nomcategorie:{type:String,required:true,unique:true},
    imagecategorie:{type:String,required:false}
})
const Categorie = mongoose.model('Categorie',CategorieSchema);
export default  Categorie 