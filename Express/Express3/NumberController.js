export const Square=(req,res)=>{
    var num = parseInt(req.param.n);
    if(num<0){
        res.status(400).send({message:'Negative value are not allowed'})

    }else{
        var sq= num*num;
        res.status(200).send({Square:sq})
    }
}
export const Sum = (req,res)=>{
    const{a,b}= req.param;
    var c = parseInt(a)+parseInt(b)
    res.send({Sum:c})
}
export const Add = (req,res)=>{
    console.log(req.body)
    res.send("add route")
}
