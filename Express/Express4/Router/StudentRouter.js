import express from "express"
import {fetchStudent} from "../Controller/StudentController.js"


const studentRouter=express.Router()
studentRouter.get('/',fetchStudent)

export default studentRouter;