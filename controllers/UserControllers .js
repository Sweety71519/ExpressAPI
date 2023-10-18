const User = require("../models/User")
const fs = require("fs")


const passwordValidator = require("password-validator")
const bcrypt = require("bcrypt")

var schema = new passwordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                              // Must have uppercase letters
    .has().lowercase(1)                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123', "User@123", "Admin@12345", "Password@123", "Password@12345"]); // Blacklist these values

async function create(req, res) {
    if (schema.validate(req.body.password)) {
        bcrypt.hash(req.body.password, 12, async (error, hash) => {
            if (error)
                res.status(500).send({ result: "Fail", message: "Internal Server Error" })
            else {
                try {
                    var data = new User(req.body)
                    data.password = hash
                    await data.save()
                    res.send({ result: "Done", message: "Record is Created", data: data })
                } catch (error) {
                    console.log(error);
                    if (error.keyValue)
                        res.status(400).send({ result: "Fail", message: "user Already Taken" })
                    else if (error.errors.name)
                        res.status(400).send({ result: "Fail", message: error.errors.name.message })
                    else if (error.errors.user)
                        res.status(400).send({ result: "Fail", message: error.errors.user.message })
                    else if (error.errors.email)
                        res.status(400).send({ result: "Fail", message: error.errors.email.message })
                    else if (error.errors.phone)
                        res.status(400).send({ result: "Fail", message: error.errors.phone.message })
                    else if (error.errors.password)
                        res.status(400).send({ result: "Fail", message: error.errors.password.message })
                    else
                        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
                }
            }
        })
    }
    else
        res.status(400).send({ result: "Fail", message: "Invalid Password. Password Length Must Be Greater then 7 and Less Then 100 and Use Atleast 1 Upper Case Character,1 Lower Case Character and 1 Digit" })
}
async function get(req, res) {
    try {
        var data = await User.find().sort({ _id: -1 })
        res.send({ result: "Done", count: data.length, data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}
async function getSingle(req, res) {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Record not Found" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}
async function update(req, res) {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.address = req.body.address ?? data.address
            data.pin = req.body.pin ?? data.pin
            data.city = req.body.city ?? data.city
            data.state = req.body.state ?? data.state
            if (req.file) {
                try {
                    fs.unlinkSync("public/uploads/users/" + data.pic)
                } catch (error) { }
                data.pic = req.file.filename
            }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Record not Found" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}
async function deleteData(req, res) {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data) {
            try {
                fs.unlinkSync("public/uploads/users/" + data.pic)
            } catch (error) { }
            data.deleteOne()
            res.send({ result: "Done", message: "Record is Deleted" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Record not Found" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}
async function login(req, res) {
    try {
        var data = await User.findOne({ user: req.body.user })
        if (data) {
            if (await bcrypt.compare(req.body.password, data.password))
                res.send({ result: "Done", data: data })
            else
                res.status(404).send({ result: "Fail", message: "user or Password is Invalid" })
        }
        else
            res.status(404).send({ result: "Fail", message: "user or Password is Invalid" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}

module.exports = [create, get, getSingle, update, deleteData, login]

