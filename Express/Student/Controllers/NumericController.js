export const factorial =(req,res)=>{
    var f=1;
    const num = parseInt(req.params.n)
    if(num<0)
        {
            res.status(400).send({message:"Negative"})
        }else{
            for(let i=1;i<=num;i++)
                {
                    f=f*1
                }
                res.status(200).send({factorial:f})
        }
}