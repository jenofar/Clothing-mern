import express from "express";
import { deletecart, insertCart,clearcart } from "../controller/cartController.js";
import auth from "../middleware/auth.js";

const route=express.Router()

route.post('/insertcart',auth,insertCart)
route.post('/deletecart',auth,deletecart)
route.delete('/clearcart',auth,clearcart)

export default route
