import express, { NextFunction, Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("HELLO WORLD TYPESCrIPT IS WORKING");
});

app.listen(5000, () => {
  console.log(`server working on http://localhost:5000`);
});
