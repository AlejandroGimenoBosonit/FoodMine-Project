import express, { Request, Response, Router } from "express";
import { login, getUser } from '../controllers/auth/auth.controllers';

const dbRouter: Router = express.Router();

dbRouter.post("/login", login);
dbRouter.get("/", getUser);

export default dbRouter;
