import express from "express"

const PORT =6800;
const app = express();

// app.use(express.json());
// app.use("/student",studentRouter)
// app.use("/admins",adminRouter)

app.listen(PORT,()=>{
   Connection.connect((error)=>{
       if(error){
        console.log("Error In DB connection.....!")
        console.log(error);
       }else{
        console.log("Db Connected")
       }
    })
    console.log(`Server is running on port${PORT}`)
})