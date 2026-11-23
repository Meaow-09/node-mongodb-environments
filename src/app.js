const express = require("express");
const taskRoutes = require("./routes/task.routes");
const config = require("./config/env");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        environment: config.environment
    });
});

app.use("/api/tasks", taskRoutes);

module.exports = app;