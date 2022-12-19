import express, { Request, Response, Router } from "express";
const dbRouter: Router = express.Router();

// tags controllers
import {
  getAllTags,
  getProductByTag,
} from "../controllers/tagsFoods.controllers";

dbRouter.get("/all", getAllTags);
dbRouter.get("/:tagName", getProductByTag);

export default dbRouter;
