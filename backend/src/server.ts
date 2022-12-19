import express, { application, Request, Response } from "express";
import cors from "cors";

// routes
import foodRoutes from "./routes/foods.routes";
import authRoutes from "./routes/auth.routes";

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
app.use("/api/users", authRoutes);

const PORT: number = 5000;

app.listen(PORT, () =>
  console.log(`Server running on "http://localhost:${PORT}"`)
);
