require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //parse json bodies in the request object
app.use(cors()); //enable cors for all requests

//Routes 
app.use("/car", require("./src/server/routers/carRoute"));

//Example if you prefer shorter routes
// app.delete("/salesman/id", async (req, res) => {
//   const x = await pool.query("DELETE FROM salesman WHERE salesman_id = ?", [req.params.id]);
//   res.send(x);
// });
 
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('server started in port 3000');
})
