const express = require("express");
const colors = require("colors");
const cors=require("cors");
const morgan=require("morgan");
const dotenv=require("dotenv");
const { connectDB } = require("./config/db");

//dot env config
dotenv.config();

//DB connection
connectDB();


//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/test",require("./routes/testRoute"));
app.use("/api/v1/auth",require("./routes/authRoutes"));

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Food Server");
});

//PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
