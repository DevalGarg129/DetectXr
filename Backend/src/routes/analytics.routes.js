const express = require("express");

const router = express.Router();

const {
  fetchAnalytics
} = require(
  "../controllers/analytics.controller"
);

router.get("/", fetchAnalytics);

module.exports = router;