const express = require('express')

class App {
  constructor(){
    this.app = express()
  }
}

export default new App().app;