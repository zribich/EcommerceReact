import mongoose from "mongoose";
import panier from "../models/panier.js"

export const getpanier = async(req,res)=>{
    try{
         const _panier= await panier.find().populate("refcommande").populate("refarticle");
         res.status(200).json(_panier);
    }
    catch(error)
    {
         res.status(404).json({message : error.message});
    }
}

export const getpanierID = async(req,res)=>{
     try{
          const _panier= await panier.find(req.params);
          res.status(200).json(_panier);
     }
     catch(error)
     {
          res.status(404).json({message : error.message});
     }
 }
export const createpanier = async(req,res)=>{
    const {refcommande,refarticle,qte_ach,remise,prix_unit,tot_ligne}=req.body;
    //req.body
    const newpanier= new panier({refcommande:refcommande,
        refarticle:refarticle,
        qte_ach:qte_ach,
        remise:remise,
        prix_unit:prix_unit,
        tot_ligne:tot_ligne
        })
    try{
          await newpanier.save();
         res.status(201).json(newpanier);
    }
    catch(error)
    {
         res.status(409).json({message : error.message});
    }
}
export const updatepanier = async(req,res)=>{
       const {id}=req.params;
       const {refcommande,refarticle,qte_ach,remise,prix_unit,tot_ligne}=req.body;

       if(!mongoose.Types.ObjectId.isValid(id))
       return res.status(404).send(`pas de panier avec un id :${id} `);
       const _panier={
            refcommande:refcommande,
            refarticle:refarticle,
            qte_ach:qte_ach,
            remise:remise,
            prix_unit:prix_unit,
            tot_ligne:tot_ligne,
            _id:id 
       };
       await panier.findByIdAndUpdate(id,_panier);
       res.json(_panier);
 }
 export const deletepanier= async(req,res)=>{
     const {id}=req.params;
    

     if(!mongoose.Types.ObjectId.isValid(id))
     return res.status(404).send(`pas de panier avec un id :${id} `);
    
     await panier.findByIdAndRemove (id);
     res.json({message:"panier deleted successfully"});
}