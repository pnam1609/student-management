/* eslint-disable max-len */
module.exports = {
  getClasses: () => {
    const result = `SELECT * from classes`;
    return result;
  },
  postClasses: (name_class) => {
    const result = `INSERT INTO classes VALUES (DEFAULT,'${name_class}');`;
    return result;
  },
};


// phoneNumber, email, name_student, dateOfBirth, gender, classID