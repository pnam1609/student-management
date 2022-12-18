/* eslint-disable max-len */
module.exports = {
  getTeachersQuery: () => {
    const result = `SELECT * from teachers`;
    return result;
  },
};


// phoneNumber, email, name_student, dateOfBirth, gender, classID