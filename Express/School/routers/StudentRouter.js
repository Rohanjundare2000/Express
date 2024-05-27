import express from "express"
import {fetchStudentById, fetchStudent, removeStudent, saveStudent, updateStudent} from "../controller/StudentController"
const studentRouter=express.Router()

studentRouter.get('/',veriftyToken,fetchStudents);
studentRouter.post('/',verifyToken,saveStudent)
studentRouter.get('/:id',verifyToken,fetchStudentById)
studentRouter.delete('/:id',verifyToken,removeStudent)
studentRouter.put('/:id', verifyToken,updateStudent)

export default studentRouter;