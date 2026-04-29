const express = require("express");
const cors = require("cors");
require("dotenv").config();

const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// 👇 IMPORTANT: always LAST middleware
app.use(errorHandler);

module.exports = app;