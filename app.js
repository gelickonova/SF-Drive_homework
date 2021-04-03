const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('dist'))


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
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.post("/registration/step1", function (req,res) {
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})