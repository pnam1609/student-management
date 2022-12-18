const express = require('express')
const router = express.Router();
const { addNewClass, getClassList } = require("./service");
const middleware = require("../middleware");

// , middleware.authenticate
router.get("/", middleware.authenticate, async (req, res) => {
  return await getClassList(req, res);
});

router.post("/", middleware.authenticate, async (req, res) => {
  return await addNewClass(req, res);
});


module.exports = router;
