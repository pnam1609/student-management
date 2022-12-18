const express = require('express')
const router = express.Router()
const authService = require('./service')

router.post("/register", async (req, res) => {
    return await authService.register(req, res)
});

router.post("/login", async (req, res) => {
    return await authService.login(req, res)
});

module.exports = router