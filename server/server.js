const express= require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./model/todo');
const {User} = require('./model/user');


const app= express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/todos",(req,res)=>{
    var todo =new Todo(req.body);

    todo.save().then((doc)=>{
        res.send(doc);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

app.listen(PORT,()=>{
    console.log("server is up at ",PORT);
})