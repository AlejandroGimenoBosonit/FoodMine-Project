import express, { Router } from "express";

// child routes
import searchFoods from "./searchFoods.routes";
import tagFoods from "./tagsFoods.routes";

// controllers
import {
  getAllProducts,
  getProductById
} from "../controllers/foods.controllers";

// router
const dbRouter: Router = express.Router();

// router
dbRouter.get("/", getAllProducts);
dbRouter.get("/:id", getProductById);

// child food search routes
dbRouter.use("/search", searchFoods);
// child food tags routes
dbRouter.use("/tags", tagFoods);

export default dbRouter;
