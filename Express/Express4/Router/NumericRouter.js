import express from "express"
import {factorial} from "../Controller/NumericController.js"

const numericRouter=express.Router();
numericRouter.get("/factorial/:n",factorial)

export default numericRouter;