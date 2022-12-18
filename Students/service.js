const statusConstants = require("../constants/status");
const { constructQuery } = require("../utils/constructQuery");
const { getStudents } = require("./query");
const response = require('../utils/response')

const getListStudents = async (req, res) => {
  try {
    const result = await constructQuery(getStudents());

    return res
      .status(statusConstants.success)
      .json(response("Get list student success", result?.rows));
  } catch (error) {
    console.log(error.message);
    return res
      .status(statusConstants.bad_request)
      .json(response("Get list shoes failed", error.message));
  }
};

const addStudents = async (req, res) => {
  const { student } = req.body

  try {
    const result = await constructQuery(postStudents(student));

    return res
      .status(statusConstants.created)
      .json(response("Get list student success", result?.rows));
  } catch (error) {
    console.log(error.message);
    return res
      .status(statusConstants.bad_request)
      .json(response("add student failed", error.message));
  }
};

module.exports = { getListStudents };
