/* eslint-disable max-len */
module.exports = {
    findTeacherByEmail: (email) => {
        const result = `select * from teachers WHERE email = '${email}' limit 1`;
        return result;
    },
    registerTeacher: (newTeacher) => {
        const result = `INSERT INTO teachers VALUES (DEFAULT,
            '${newTeacher.phone_number}', '${newTeacher.email}','${newTeacher.password_login}',
            '${newTeacher.name_teacher}','${newTeacher.date_of_birth}', ${newTeacher.gender});`

        return result;


    },
};


  // phoneNumber, email, name_student, dateOfBirth, gender, classID