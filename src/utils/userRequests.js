const {default: axios} =  require('axios')
const baseURL = 'http://localhost:3399'
const validator = require('validator')

module.exports = {
    loginReq: (form) => {
        const reqBody = {}, fieldErrors = {};
        for (const input of form) {
            if (input.name === "credential" && (input.value.length < 3 || input.value.length > 254)) {
                fieldErrors[input.name] = "\nInvalid length, must be between 3 and 254 characters!"
            }
            if (input.name === "password" && (input.value.length < 7 || input.value.length > 1000)) {
                fieldErrors[input.name] = "\nInvalid password length, password must be between 7 and 1000 characters\n"
            }
        }

        if (Object.keys(fieldErrors).length !== 0) {
            let errorStr = "";
            for (const field in fieldErrors) {
                errorStr += `\nError in field ${field !== "credential" ? field : "username or email"} - ${fieldErrors[field]}`
            }
            console.log(errorStr)
            alert(errorStr)
            return
        } else {
            for (const input of form) {
                reqBody[input.name] = input.value
            }
        }

        const loginUrl = baseURL + '/user/login'

        axios.put(loginUrl, reqBody)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })
    },

    regReq: (form) => {
        const reqBody = {}, fieldErrors = {}
        for (const input of form) {
            const val = input.value
            if (input.name === "email") {
                if (val.length < 6 || val.length > 254) {
                    fieldErrors.email = "\nYou must enter a valid email.\n"

                } else if (!validator.isEmail(val)) {
                    fieldErrors.email = "\nYou must enter a valid email.\n"
                }
            }
            if (input.name === "username" && (val.length < 3 || val.length > 21)) {
                    fieldErrors.username = "\nUsername length has to be between 3 and 21 valid characters.\n"
            }
            if (input.name === "password" && (val.length < 7 || val.length > 1000)) {
                    fieldErrors[input.name] = "\nInvalid password length: password should be between 7 & 1000 characters\n"
            }
            if (document.getElementsByName("password").value !== document.getElementsByName("password2").value) {
                fieldErrors["password_match"] = "\nThe two passwords must match\n"
            }
    
    
        }
        console.log(fieldErrors)
        if (Object.keys(fieldErrors).length !== 0) {
            let errorStr = "";
            for (const field in fieldErrors) {
                errorStr += `\nError in the ${field !== "credential" ? field : "username or email"} field: ${fieldErrors[field]}`
            }
            console.log(errorStr)
            alert(errorStr)
        } else if (Object.keys(fieldErrors).length === 0) {
            for (const input of form) {
                if (input.name !== "password2") {
                    reqBody[input.name] = input.value
                }
            }
            console.log(reqBody)
            const registerURL = `${baseURL}/user/register`

            axios.post(registerURL, reqBody)
            .then(res => {console.log(res)})
            .catch(error => {
                if (error) {
                    console.log(error)
                }
            })
        }
    }
}