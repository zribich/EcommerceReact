import express from "express";
import { getScategories,createScategories,getScategoriesID,updateScategories,deleteScategories } from "../controllers/scategoriecontrollers.js";
const router=express.Router()
router .get('/',getScategories)
router .get('/:id',getScategoriesID)
router .put('/:id',updateScategories)
router .post('/',createScategories)
router .delete('/:id',deleteScategories)
export default router ;