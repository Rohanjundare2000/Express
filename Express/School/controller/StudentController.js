export const fetchStudent = (req,res)=>{
    const qry=`select * from ${STUDENT_TABLE_NAME}`
    connection.query(qry,(error,result)=>{
        if(error){
            res.status(500).send({message:'something went wrong'});
        }else{
            res.status(200).send(result)
        }
    })
}

export const saveStudent=(req,res)={
    const {id,name,marks,phone}
}