import express from "express";
import numericRouter from "./Router/NumericRouter.js"
import studentRouter from "./Router/StudentRouter.js"
import  {connection} from "./Utility/DbUtil.js"

const PORT = 9600
const app = express()

app.use(express.json())
app.use(numericRouter)
app.use("/student",studentRouter)

app.listen(PORT,()=>{
       connection.connect((error)=>{
            if(error){
                console.log("error in DB connection")
                console.log(error)
            }
            else{
                console.log("Database connected !")
            }
         })
         console.log(`server running on port ${PORT}`)
})