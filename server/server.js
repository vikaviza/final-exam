const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ClientModel = require('./models/Clients')

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud")

app.get('/', (req, res) => {
    ClientModel.find({})
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

app.get('/getClient/:id', (req, res) => {
    const id = req.params.id;
    ClientModel.findById({_id:id})
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

app.put('/editClient/:id', (req, res) => {
    const id = req.params.id;
    ClientModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name, 
    surname: req.body.surname, 
    birthdate: req.body.birthdate, 
    mobile: req.body.mobile, 
    email: req.body.email})
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

app.delete('/deleteClient/:id', (req, res) => {
    const id = req.params.id;
    ClientModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/addClient", (req, res) => {
    ClientModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running');
})