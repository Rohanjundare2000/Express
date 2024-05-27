import express from 'express'
import { Square,Sum,Add } from './NumberController';

const numberRouter = express.Router();

numberRouter.get('/square/:n',Square)
numberRouter.get('/sum/:a/:b',Sum)
numberRouter.post('/add',Add)

export default numberRouter;