import mongoose from "mongoose";
import Article from "../models/Article.js";

export const getarticles = async(req,res)=>{
    try{
        const art= await Article.find().populate("CategorieID","scategorieID").exec();
         res.status(200).json(art);
    }
    catch(error)
    {
         res.status(404).json({message : error.message});
    }
}

export const getarticlesID = async(req,res)=>{
     try{
          const art= await  Article.find(req.params);
          res.status(200).json(art);
     }
     catch(error)
     {
          res.status(404).json({message : error.message});
     }
 }
export const createarticles = async(req,res)=>{
       const {reference,designation,prixachat,prixvente,prixsolde,marque,qtestock,caracteristiques,imageartpetitf, imageartgrandf,CategorieID,scategorieID}=req.body;

    //req.body
    const newarticle= new Article({reference:reference,
        designation:designation,
        prixachat:prixachat,
        prixvente:prixvente,
        prixsolde:prixsolde,
        marque:marque,
        qtestock:qtestock,
        caracteristiques:caracteristiques,
        imageartpetitf:imageartpetitf,
         imageartgrandf:imageartgrandf,
         CategorieID:CategorieID,
         scategorieID:scategorieID});

    try{
          await newarticle.save();
         res.status(201).json(newarticle);
    }
    catch(error)
    {
         res.status(409).json({message : error.message});
    }
}
export const updatearticles = async(req,res)=>{
       const {id}=req.params;
       const {reference,designation,prixachat,prixvente,prixsolde,marque,qtestock,caracteristiques,imageartpetitf, imageartgrandf,CategorieID,scategorieID}=req.body;

       if(!mongoose.Types.ObjectId.isValid(id))
       return res.status(404).send(`pas de categorie avec un id :${id} `);
       const art={
        reference:reference,
        designation:designation,
        prixachat:prixachat,
        prixvente:prixvente,
        prixsolde:prixsolde,
        marque:marque,
        qtestock:qtestock,
        caracteristiques: caracteristiques,
        imageartpetitf:imageartpetitf,
        imageartgrandf: imageartgrandf,
        CategorieID: CategorieID,
        scategorieID:scategorieID,
        _id:id 
       };
       await Article.findByIdAndUpdate(id,art);
       res.json(art);
 }
 export const deletearticles= async(req,res)=>{
     const {id}=req.params;
    

     if(!mongoose.Types.ObjectId.isValid(id))
     return res.status(404).send(`pas d'article avec un id :${id} `);
    
     await Article.findByIdAndRemove (id);
     res.json({message:"Article deleted successfully"});
}