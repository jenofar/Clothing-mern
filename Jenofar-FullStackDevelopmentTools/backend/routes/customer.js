import express from "express";
import { getme, login, register } from "../controller/customerController.js";
import auth from "../middleware/auth.js";

const route=express.Router()

route.post('/register',register)
route.post('/login',login)
route.get('/getme',auth,getme)


export default route