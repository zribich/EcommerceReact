import express from "express";
import { getcommandes,createcommandes,getcommandesID,updatecommandes,deletecommandes } from "../controllers/commandescontrollers.js";
const router=express.Router()
router .get('/',getcommandes)
router .get('/:id',getcommandesID)
router .put('/:id',updatecommandes)
router .post('/',createcommandes)
router .delete('/:id',deletecommandes)
export default router ;