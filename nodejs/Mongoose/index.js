const express = require("express");
const fs = require("fs");

const { logReqRes } = require("./middlewares")
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");

const app = express();
const PORT = 3000;


// Connection
connectMongoDB("mongodb://127.0.0.1:27017/my-app").then(() => {
	console.log("MongoDB connected");
});


// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));


// Routes
app.use("/api/users", userRouter);
 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
