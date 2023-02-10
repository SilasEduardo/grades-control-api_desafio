import express from 'express';
import gradeRouter from './src/router/gradeRouter';


import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
   
  }

  routes() {
    this.app.use('/grade', gradeRouter);
  }
}

export default new App().app;