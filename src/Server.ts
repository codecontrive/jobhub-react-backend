import 'reflect-metadata'; // this shim is required

import express = require('express');

import { json, urlencoded } from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { UsersController } from './controllers/UsersController';

export class Server {

  public app: express.Application;

  constructor() {
    if(this.app = express()) {
      console.log("500 from the backend")
    }
    this.config();
    this.controllersSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(json());
    // support application/x-www-form-urlencoded post data
    this.app.use(urlencoded({ extended: false }));
  }

  private controllersSetup(): void {
    useExpressServer(this.app, {
        controllers: [UsersController], // we specify controllers we want to use
      });
  }
}
