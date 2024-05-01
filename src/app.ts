import express, { NextFunction, Request, Response } from "express";
import { connectDb } from "./config/db.js";
import formRoute from "./routes/form.js";

connectDb();
const app = express();

app.use(express.json());
app.use("/api/v1/form", formRoute);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("HELLO WORLD TYPESCrIPT IS WORKING");
});

app.listen(5000, () => {
  console.log(`server working on http://localhost:5000`);
});
