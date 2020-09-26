const User = require('../models/User');
const validator = require("validator");
const bcrypt = require('bcrypt');

const msgs = {
    emailInUse: 'Email Already In Use',
    emailVaild: 'Valid Email Required',
    userChars: "Username Must Use Alphanumeric Characters Only",
    userInUse: "Username Already In Use",
    lengthInvalid: (field) => {
        return `The Given ${field} Did Not Meet Length Requirements`
    }
}

const validate = async (req, res, next) => {

    const { email: e, password: p, username: u } = req.body;

    if ( e == undefined || p == undefined || u == undefined ) {
        return res.status(400).json({err: 'One or more required values are missing!!'});
    }

    failedValues = [];

    if (!validator.isEmail(e)) {
        failedValues.push({
            key: "email",
            message: msgs.emailVaild
        })
    }

    const emailInUse = await User.findOne({ email: e }) != null;
    if (emailInUse) {
        failedValues.push({
            key: "email",
            message: msgs.emailInUse
        })
    }

    if (e != undefined && e.length < 6 || e.length > 254) {
        failedValues.push({
            key: "email",
            message: msgs.lengthInvalid('Email')
        })
    }

    if (u == undefined || u.trim().length == 0 || !validator.isLength(u, { min: 3, max: 21 })) {
        failedValues.push({
            key: "username",
            message: msgs.lengthInvalid('Username')
        })
    } else if ( !validator.isAlphanumeric(u, 'en-US') ) {

        failedValues.push({
            key: "username",
            message: msgs.userChars
        })
    } 
    
    const userInUse = await User.findOne({ username: u }) != null;
    if (userInUse) {
        failedValues.push({
            key: "username",
            message: msgs.userInUse
        })
    }

    if ( !validator.isLength(p, { min: 7, max: 1000 }) ) {
        failedValues.push({
            key: "password",
            message: msgs.lengthInvalid('Password')
        })
    }

    if (failedValues.length > 0) {
        res
            .status(400)
            .json({
                validation_error: failedValues
            })
    } else {

        const encryptedPass = await bcrypt.hash(p, 10);

        req.userData = {
            email: e,
            username: u,
            password: encryptedPass
        }
        next()

    }

}

module.exports = validate;