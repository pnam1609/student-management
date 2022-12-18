const express = require('express')
const router = express.Router();
const { getTeachers } = require("./service");
const middleware = require("../middleware");

// , middleware.authenticate
router.get("/", middleware.authenticate, async (req, res) => {
  return await getTeachers(req, res);
});



module.exports = router;
