import express, { application, Request, Response } from "express";
import cors from "cors";

// mongoDB connection
require('./database/database');

// routes
import foodRoutes from "./routes/foods.routes";
import authRoutes from "./routes/auth.routes";
import seedRoutes from "./routes/seed.routes";

const app = express();

app.get("/", (request: Request, response: Response) =>
  response.send("Welcome to Food Mine Backend")
);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost: 4200"],
  })
);

app.use("/api/foods", foodRoutes);
app.use("/api/seeds", seedRoutes);
app.use("/api/users", authRoutes);

const PORT: number = parseInt(process.env.PORT!) || 5000;

app.listen(PORT, () =>
  console.log(`Server running on "http://localhost:${PORT}"`)
);
