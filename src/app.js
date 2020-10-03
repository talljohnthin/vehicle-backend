require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4040;

const pxRouter = require("./routes/px.routes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/px", pxRouter);

// server
app.listen(port, () => console.log("its running at " + port));
