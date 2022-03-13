import mongoose from "mongoose";
import commande from "../models/commande.js"

export const getcommandes = async(req,res)=>{
    try{
         const cmd= await commande.find();
         res.status(200).json(cmd);
    }
    catch(error)
    {
         res.status(404).json({message : error.message});
    }
}

export const getcommandesID = async(req,res)=>{
     try{
          const cmd= await commande.find(req.params);
          res.status(200).json(cmd);
     }
     catch(error)
     {
          res.status(404).json({message : error.message});
     }
 }
export const createcommandes = async(req,res)=>{
    const {refcommande,dateachat,mt_total,paye}=req.body;
    //req.body
    const newcommande= new commande({refcommande:refcommande,dateachat:dateachat,mt_total:mt_total,paye:paye})
    try{
          await newcommande.save();
         res.status(201).json(newcommande);
    }
    catch(error)
    {
         res.status(409).json({message : error.message});
    }
}
export const updatecommandes = async(req,res)=>{
       const {id}=req.params;
       const {refcommande,dateachat,mt_total,paye}=req.body;

       if(!mongoose.Types.ObjectId.isValid(id))
       return res.status(404).send(`pas de commande avec un id :${id} `);
       const cmd={
        refcommande:refcommande,
        dateachat:dateachat,
        mt_total:mt_total,
        paye:paye,
        _id:id 
       };
       await commande.findByIdAndUpdate(id,cmd);
       res.json(cmd);
 }
 export const deletecommandes= async(req,res)=>{
     const {id}=req.params;
    

     if(!mongoose.Types.ObjectId.isValid(id))
     return res.status(404).send(`pas de commande avec un id :${id} `);
    
     await commande.findByIdAndRemove (id);
     res.json({message:"commande deleted successfully"});
}