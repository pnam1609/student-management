const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const status = require('../constants/status')
const { constructQuery } = require('../utils/constructQuery')
const response = require("../utils/response")
const { findTeacherByEmail, registerTeacher } = require('./query')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }
        const resultQuery = await constructQuery(findTeacherByEmail(email));
        const teacher = resultQuery?.rows?.length > 0 && resultQuery?.rows[0]

        if (!(teacher && (await bcrypt.compare(password, teacher.password_login)))) {
            throw new Error('Invalid Credentials')
        }

        const token = await jwt.sign(
            { teacher_id: teacher.teacher_id, email },
            process.env.SECRET_KEY,
            {
                expiresIn: "7d",
            }
        );

        teacher.token = token;
        teacher.password_login && delete teacher.password_login
        return res.status(status.success).json(response('Login successfully', teacher));
    } catch (err) {
        console.log(err);
        return res.status(status.unauthorized).json(response(err));
    }
}

const register = async (req, res) => {
    const {
        phone_number,
        email,
        password_login,
        name_teacher,
        date_of_birth,
        gender } = req.body;

    if (!(email && password_login)) {
        return res.status(status.bad_request).send(response("All input is required"));
    }

    const oldTeacher = await constructQuery(findTeacherByEmail(email));

    if (oldTeacher.rowCount) {
        return res.status(status.conflict).send(response("User Already Exist!"));
    }

    const encryptedPassword = await bcrypt.hash(password_login, 10);

    const newTeacher_payload = {
        teacher_id: 'DEFAULT',
        phone_number,
        email,
        password_login: encryptedPassword,
        name_teacher,
        date_of_birth,
        gender
    }
    console.log('newTeacher_payload', newTeacher_payload)

    try {
        const newTeacher = await constructQuery(registerTeacher(newTeacher_payload));
        return res.status(status.created).json(response(true, "Create Account successfully", newTeacher));
    } catch (error) {
        console.log('error', error)
        return res.status(status.conflict).json(response('Create Account Failed'))
    }
}


module.exports = {
    login,
    register
}
