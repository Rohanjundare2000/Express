import express from "express"
import { fetchStudents } from "../Controllers/StudentController";

const studentRouter=express.Router()
studentRouter.get('/',fetchStudents)
export default studentRouter;
