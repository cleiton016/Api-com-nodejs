const nodemeiler = require('nodemailer');
const { host, port, user, pass } = require('../config/mail.json');
const transport = nodemeiler.createTransport({
    host,
    port,
    auth: { user, pass },
})

module.exports = transport