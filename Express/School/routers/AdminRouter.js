import express from "express"
import {adminlogin, registerAdmin} from ""

const adminRouter = express.Router()
adminRouter.post('/',registerAdmin)
adminRouter,post('/login', adminlogin)

export default adminRouter;