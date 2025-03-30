import app from "./app.js";
import gb from "./configs/globalVariable.js";

const poet = gb.port || 3000;
app.listen(poet, () => {
  console.log(`server started on port: ${poet}`);
});
