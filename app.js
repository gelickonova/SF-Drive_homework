const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('dist'))


mongoose.connect('mongodb://localhost/sf-drive-users', function (err) {
    if (err) throw err;
    console.log('Successfully connected!!');

});

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    birthDate: Date,
    email: {
        type: String,
        required: true
    },
    phoneNumber: Number,
    passportID: Number,
    dateOfIssue: Date,
    issuingAuthority: String,
    departmentCode: Number,
    numberOfLicense: Number,
    dateOfLicense: Date,
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

app.get('/aboutus', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.get('/faq', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.get('/registration/step1', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.get('/registration/step2', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.get('/registration/step3', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})
app.get('/registration/done', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.post("/registration/step1", function (req, res) {
    const user = req.body;
    const errors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (user.password !== user.repeatPassword) errors.password = true;
    if (!user.email.match(emailRegex)) errors.email = true;
    if (errors.password || errors.email) {
        res.status(500).send(errors)
    } else {

        let someUser = new User(
            {
                fullName: user.fullName,
                birthDate: user.birthDate,
                email: user.email,
                phoneNumber: user.phoneNumber,
                passportID: user.passportID,
                dateOfIssue: user.dateOfIssue,
                issuingAuthority: user.issuingAuthority,
                departmentCode: user.departmentCode,
                numberOfLicense: user.numberOfLicense,
                dateOfLicense: user.dateOfLicense,
                password: user.password
            })
        someUser.save(err => {
            if (err) throw err;
            console.log('user successfully saved!')
        })
        res.sendStatus(200)
    }
})

app.post("/registration/step2", function (req, res) {
    console.log(req.body)
    res.sendStatus(200)
})
app.post("/registration/step3", function (req, res) {
    console.log(req.body)
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})