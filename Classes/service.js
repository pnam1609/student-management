const statusConstants = require("../constants/status");
const { constructQuery } = require("../utils/constructQuery");
const { getClasses, postClasses } = require("./query");
const response = require('../utils/response')

const getClassList = async (req, res) => {
  try {
    const result = await constructQuery(getClasses());

    return res
      .status(statusConstants.success)
      .json(response("Get list class success", result?.rows));
  } catch (error) {
    return res
      .status(statusConstants.bad_request)
      .json(response("Get list class failed", error.message));
  }
};

const addNewClass = async (req, res) => {
  const { name_class } = req.body

  try {
    await constructQuery(postClasses(name_class));

    return res
      .status(statusConstants.created)
      .json(response("Add list class success"));
  } catch (error) {
    console.log(error.message);
    return res
      .status(statusConstants.bad_request)
      .json(response("add class failed", error.message));
  }
};

module.exports = { getClassList, addNewClass };
