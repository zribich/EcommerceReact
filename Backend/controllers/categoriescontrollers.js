import mongoose from "mongoose";
import Categorie from "../models/Categorie.js";

export const getCategories = async(req,res)=>{
    try{
         const cat= await Categorie.find();
         res.status(200).json(cat);
    }
    catch(error)
    {
         res.status(404).json({message : error.message});
    }
}

export const getCategoriesID = async(req,res)=>{
     try{
          const cat= await Categorie.findById(req.params.id);
          res.status(200).json(cat);
     }
     catch(error)
     {
          res.status(404).json({message : error.message});
     }
 }
export const createCategories = async(req,res)=>{
    const {nomcategorie,imagecategorie}=req.body;
    //req.body
    const newcategorie= new Categorie({nomcategorie:nomcategorie,imagecategorie:imagecategorie})
    try{
          await newcategorie.save();
         res.status(201).json(newcategorie);
    }
    catch(error)
    {
         res.status(409).json({message : error.message});
    }
}
export const updateCategories = async(req,res)=>{
       const {id}=req.params;
       const {nomcategorie,imagecategorie}=req.body;

       if(!mongoose.Types.ObjectId.isValid(id))
       return res.status(404).send(`pas de categorie avec un id :${id} `);
       const cat={
            nomcategorie:nomcategorie,
            imagecategorie:imagecategorie,
            _id:id 
       };
       await Categorie.findByIdAndUpdate(id,cat);
       res.json(cat);
 }
 export const deleteCategories= async(req,res)=>{
     const {id}=req.params;
    

     if(!mongoose.Types.ObjectId.isValid(id))
     return res.status(404).send(`pas de categorie avec un id :${id} `);
    
     await Categorie.findByIdAndRemove (id);
     res.json({message:"categorie deleted successfully"});
}