import express from "express";
import { getCategories,createCategories,getCategoriesID,updateCategories,deleteCategories } from "../controllers/categoriescontrollers.js";
const router=express.Router()
router .get('/',getCategories)
router .get('/:id',getCategoriesID)
router .put('/:id',updateCategories)
router .post('/',createCategories)
router .delete('/:id',deleteCategories)
export default router ;
