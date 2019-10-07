// const http = require('http');
const express = require('express');
const app = express();
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

const UserModel = require('./models/User');

app.get('/api/login/:id',(req,res) => {

    const token =  localStorage.setItem('token','23333');
    res.json({
        token: localStorage.getItem('token'),
        id:req.params.id
    });
});

app.get('/api/badges/create',(req,res) => {

    const badge = {
        firstName : 'Pedro',
        lastName : 'Fernanez',
        email : 'pderof@gmail.com',
        twitter : '@pedrof',
        jobTitle : 'PedroFF',
        avatarUrl : 'http://pedro.avatar',

    }

    const Badge = new UserModel({
        badge:[{
            firstName : 'Pedro',
            lastName : 'Fernanez',
            email : 'pderof@gmail.com',
            twitter : '@pedrof',
            jobTitle : 'PedroFF',
            avatarUrl : 'http://pedro.avatar',
        }]
    });
   
    
  
    Badge.save(function (err, fluffy) {
        if (err) return console.error(err);

    });
    res.end('Guardando...');
});


const InitServer = () => {
    console.log('iniciando server....');

    app.listen(3500,(req,res) => {
        console.log('servidor iniciado...');
    })  
}

InitServer();