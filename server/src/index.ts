import express from "express";
import dotenv from "dotenv";
import filterRouter from "./routes/filterRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

// Routes
app.use("/api", filterRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
