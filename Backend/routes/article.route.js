import express from "express";
import { getarticles,createarticles,getarticlesID,updatearticles,deletearticles } from "../controllers/articlescontrollers.js";
const router=express.Router()
router .get('/',getarticles)
router .get('/:id',getarticlesID)
router .put('/:id',updatearticles)
router .post('/',createarticles)
router .delete('/:id',deletearticles)
export default router ;