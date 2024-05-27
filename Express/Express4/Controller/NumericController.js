export const factorial =(req,res)=>{
    var f=1;
    const num=parseInt(req.param.n);
    if(num<0)
        {
            res.status(400).send({message:"negative value"})
        }
    else{
        for(let i=1;i<=num;i++){
            f=f*i;
        }
        res.status(200).send({factorial:f})
    }
}