import express from 'express'
import { factorial } from '../Controllers/NumericController';

const numericRouter = express.Router();
numericRouter.get('/factorial/:n',factorial)
export default numericRouter









