import mongoose from "mongoose";
import user from "../models/user.js"

export const getusers = async(req,res)=>{
    try{
         const users= await user.find();
         res.status(200).json(users);
    }
    catch(error)
    {
         res.status(404).json({message : error.message});
    }
}

export const getusersID = async(req,res)=>{
     try{
          const users= await user.find(req.params);
          res.status(200).json(users);
     }
     catch(error)
     {
          res.status(404).json({message : error.message});
     }
 }
export const createusers = async(req,res)=>{
    const {nome,telephone,email,password,register_date}=req.body;
    //req.body
    const newuser= new user({nome:nome,
        telephone:telephone,
        email:email,
        password:password,
        register_date:register_date
        })
    try{
          await newuser.save();
         res.status(201).json(newuser);
    }
    catch(error)
    {
         res.status(409).json({message : error.message});
    }
}
export const updateusers = async(req,res)=>{
       const {id}=req.params;
       const {nome,telephone,email,password,register_date}=req.body;

       if(!mongoose.Types.ObjectId.isValid(id))
       return res.status(404).send(`pas de USER avec un id :${id} `);
       const users={
            nome:nome,
            telephone:telephone,
            email:email,
            password:password,
            register_date:register_date,
            _id:id 
       };
       await user.findByIdAndUpdate(id,users);
       res.json(users);
 }
 export const deleteusers= async(req,res)=>{
     const {id}=req.params;
    

     if(!mongoose.Types.ObjectId.isValid(id))
     return res.status(404).send(`pas de user avec un id :${id} `);
    
     await user.findByIdAndRemove (id);
     res.json({message:"user deleted successfully"});
}