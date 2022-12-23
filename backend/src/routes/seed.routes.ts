import express, { Request, Response, Router } from "express";
// controllers
import { getSeededFood, getSeededUsers } from '../controllers/seed.controllers';
// router
const dbRouter: Router = express.Router();

dbRouter.get("/foods", getSeededFood);
dbRouter.get("/users", getSeededUsers);

export default dbRouter;
