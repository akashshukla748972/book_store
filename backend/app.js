import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome in our book store!`,
  });
});

export default app;
