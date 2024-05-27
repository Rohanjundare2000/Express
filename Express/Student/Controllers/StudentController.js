import { connection } from "../Utility/DbUtile";


export const fetchStudents=(req,res)=>{
    const qry ='select * from student;'
    connection.query(qry,(error,result)=>{
        if(error)
            {
                res.status(500).send({message:'something went wrong...!'})
            }
        else{
            res.send(result)
        }
    })
}