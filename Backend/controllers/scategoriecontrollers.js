import mongoose from "mongoose";
import Scategorie from "../models/Scategorie.js"

export const getScategories = async(req,res)=>{
    try{
         const cat= await Scategorie.find().populate("CategorieID").exec();
         res.status(200).json(cat);
    }
    catch(error)
    {
         res.status(404).json({message : error.message});
    }
}

export const getScategoriesID = async(req,res)=>{
     try{
          const Scat= await Scategorie.findById(req.params.id);
          res.status(200).json(Scat);
     }
     catch(error)
     {
          res.status(404).json({message : error.message});
     }
 }
export const createScategories = async(req,res)=>{
    const {nomscategorie,imagescat,CategorieID}=req.body;
    //req.body
    const newScategorie= new Scategorie({nomscategorie:nomscategorie,imagescat:imagescat,CategorieID:CategorieID})
    try{
          await newScategorie.save();
         res.status(201).json(newScategorie);
    }
    catch(error)
    {
         res.status(409).json({message : error.message});
    }
}
export const updateScategories = async(req,res)=>{
       const {id}=req.params;
       const {nomscategorie,imagescat,CategorieID}=req.body;

       if(!mongoose.Types.ObjectId.isValid(id))
       return res.status(404).send(`pas de categorie avec un id :${id} `);
       const scat={
            nomscategorie:nomscategorie,
            imagescat:imagescat,
            CategorieID:CategorieID,
            _id:id 
       };
       await Scategorie.findByIdAndUpdate(id,scat);
       res.json(scat);
 }
 export const deleteScategories= async(req,res)=>{
     const {id}=req.params;
    

     if(!mongoose.Types.ObjectId.isValid(id))
     return res.status(404).send(`pas de categorie avec un id :${id} `);
    
     await Scategorie.findByIdAndRemove (id);
     res.json({message:"categorie deleted successfully"});
}