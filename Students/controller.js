const express = require('express')
const router = express.Router();
const studentService = require("./service");
const middleware = require("../middleware");

// , middleware.authenticate
router.get("/", middleware.authenticate, async (req, res) => {
  return await studentService.getListStudents(req, res);
});

router.post("/", async (req, res) => {
  return await studentService.addStudents(req, res);
});


module.exports = router;
