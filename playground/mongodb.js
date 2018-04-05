// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var  obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err)
        return console.log("Unable to connect to MongoDB server");
    console.log("Conected to MongoDB server");
    let dbo=db.db('todoApp');
    // dbo.collection('Todos').insertOne({
    //     text: "hello,mongodb",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo: ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })


    // dbo.collection('users').insertOne({
    //     name : "ThaiB2",
    //     age: 21,

    // },(err,result)=>{
    //     if(err)
    //         return console.log("Unable to insert: ",err);
    //     console.log(JSON.stringify(result.ops,undefined,2));    
    // })




    db.close();
});