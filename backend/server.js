import app from "./app.js";
import connectToDb from "./configs/db.js";
import gb from "./configs/globalVariable.js";

const port = gb.port || 3000;

connectToDb().then(() => {
  app.listen(port, () => {
    console.log(`server started on port: ${port}`);
  });
});
