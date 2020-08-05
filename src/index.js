//require mongoose helps to connect to database
const express = require("express");
require("./db/mongoose");
const { findByIdAndUpdate } = require("./models/user");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   res.status(503).send("site under maintenance");
// });

//parsing the incoming json to object to be able to acess in request handlers
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
