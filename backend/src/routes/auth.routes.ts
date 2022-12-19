import express, { Request, Response, Router } from "express";
import { login } from '../controllers/auth/auth.controllers';

const dbRouter: Router = express.Router();

dbRouter.post("/login", login);

export default dbRouter;
