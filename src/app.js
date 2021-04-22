//require mongoose helps to connect to database
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

//parsing the incoming json to object to be able to access in request handlers
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
