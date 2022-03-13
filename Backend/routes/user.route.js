import express from "express";
import { getusers,createusers,getusersID,updateusers,deleteusers } from "../controllers/userscontrollers.js";
const router=express.Router()
router .get('/',getusers)
router .get('/:id',getusersID)
router .put('/:id',updateusers)
router .post('/',createusers)
router .delete('/:id',deleteusers)
export default router ;