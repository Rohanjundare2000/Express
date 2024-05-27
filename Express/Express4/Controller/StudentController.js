import  { connection } from "./src/Utility/DbUtil.js"

export const fetchStudent=(req, res)=>{
    const qry = "select * from student"
    connection.query(qry,(error,result)=>{
        if(error){
            res.status(500).send({message:"something went to wrong......!"})
        }else{
            res.send(result);
        }
    });
}
