import express from "express";
import numericRouter from "./Router/NumericRouter";
import studentRouter from "./Router/StudentRouter";
import { connection } from "./Utility/DbUtile";

const PORT = 9600;
const app = express();

app.use(express.json());
app.use(numericRouter);
app.use("/student", studentRouter);

app.listen(PORT, () => {
    connection.connect((error) => {
        if (error) {
            console.log("Error in DB");
            console.log(error);
        } else {
            console.log("Database connection");
        }
    });
    console.log(`Server running on port ${PORT}`);
});
