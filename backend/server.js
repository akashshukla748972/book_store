import app from "./app.js";

const poet = 3000;
app.listen(poet, () => {
  console.log(`server started on port: ${poet}`);
});
