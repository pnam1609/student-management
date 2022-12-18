const statusConstants = require("../constants/status");
const { constructQuery } = require("../utils/constructQuery");
const { getTeachersQuery } = require("./query");
const response = require('../utils/response')

const getTeachers = async (req, res) => {
  try {
    const result = await constructQuery(getTeachersQuery());

    return res
      .status(statusConstants.success)
      .json(response("Get list teacher success", result?.rows));
  } catch (error) {
    return res
      .status(statusConstants.bad_request)
      .json(response("Get list teacher failed", error.message));
  }
};


module.exports = { getTeachers };
