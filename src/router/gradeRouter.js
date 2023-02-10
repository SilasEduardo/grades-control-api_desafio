import { Router } from 'express';

const gradeRouter = Router();

gradeRouter.get('/', (req, res)=> {
  res.send('ola mundo')
})


export default gradeRouter;