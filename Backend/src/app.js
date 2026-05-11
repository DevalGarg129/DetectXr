const express = require("express");
const cors = require("cors");

const submissionRoutes = require("./routes/submission.routes");
const analyticsRoutes = require("./routes/analytics.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/submission",submissionRoutes);
app.use("/analytics",analyticsRoutes);

module.exports = app;