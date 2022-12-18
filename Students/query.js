/* eslint-disable max-len */
module.exports = {
  getStudents: () => {
    const result = `SELECT * from students`;
    return result;
  },
  postStudents: (studentPayload) => {
    const result = `INSERT INTO students VALUES (DEFAULT,
      '${studentPayload.phoneNumber}', '${studentPayload.email}','${studentPayload.name_student}',
      '${studentPayload.dateOfBirth}', ${studentPayload.gender},${studentPayload.classID});`;
    return result;
  },
};


// phoneNumber, email, name_student, dateOfBirth, gender, classID