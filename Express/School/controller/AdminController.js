const registerAdmin = (req,res) =>{

    const {id,username,password,phone} = req.body;
    const encryptedPassword = hashSync(password,10)
    const qry =`insert into ${ADMIN_TABLE_NAME} values(${id},'${username}','${encryptedPassword}','${phone}')`
    connection.query(qry,(error,result)=>{
      if(error){
        res.status(500).send({message:'Something went wrong'})
      }
      else{
        res.status(200).send({message:'Admin Registered !'})
      }
    });
}

export const adminLogin=(req,res)=>{
    const {username,password}=req.body;
    const qry =`select * from ${ADMIN_TABLE_NAME} where username='${username}'`;
    if(error){
        res.status(5000).send({message:'Something went wrong....!'});
    }else{
        if(result.length==0)
            {
                res.status(400).send({message:'Invalid username'})
            }
        else{
        const encryptedPassword= result[0].password;
        if(compareSync(password,encryptedPassword)){
            const token = jwt.sign({adminId:result[0]},'hello1234')
            res.status(200).send({message:'Login Successful',token: token})
        }else{
            res.status.send({message:"Invalid password for the mentioned username"})
        }
        }
    }
}

