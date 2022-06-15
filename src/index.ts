import express from "express";

const port = 3000;

//create istance from server
const app = express();

//add routing func
app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "hello, world",
  });
});

//start express server
app.listen(port, () => {
  console.log(`server is starting at http://localhost:${port}`);
});

export default app;
