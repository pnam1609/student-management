const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const timeout = require("connect-timeout");
const cors = require("cors");

const studentController = require("./Students/controller");
const authController = require("./AuthController/controller");
const classesController = require("./Classes/controller");
const teachersController = require("./Teachers/controller");

app.use(timeout(120000));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", authController);
app.use("/students", studentController);
app.use("/classes", classesController);
app.use("/teachers", teachersController);

app.get("/", async (req, res) => {
  res.json("Welcome StudentManagement");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listen port 3000`);
});
