import express from "express";
import { getpanier,createpanier,getpanierID,updatepanier,deletepanier } from "../controllers/panierscontrollers.js";
const router=express.Router()
router .get('/',getpanier)
router .get('/:id',getpanierID)
router .put('/:id',updatepanier)
router .post('/',createpanier)
router .delete('/:id',deletepanier)
export default router ;