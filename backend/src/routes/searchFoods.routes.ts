import express, { Request, Response, Router } from "express";
const dbRouter: Router = express.Router();

// search controllers
import { searchProductByName } from "../controllers/searchFood.controllers";

dbRouter.get("/:searchTerm", searchProductByName);

export default dbRouter;
