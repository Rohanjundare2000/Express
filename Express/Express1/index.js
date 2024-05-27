import express from "express"
const server=express()
server.get("/",(req, res)=>{
    res.send("hello")
})
server.get("/sum",(req,res)=>{
    res.send("Rohan")
})
server.listen(6300,()=>{
   console.log("end");
})