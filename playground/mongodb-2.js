// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var  obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err)
        return console.log("Unable to connect to MongoDB server");
    console.log("Conected to MongoDB server");
    let dbo=db.db('todoApp');
    // dbo.collection('Todos').find({_id : new ObjectID('5ac0e72bf95fe30bc4877a12')}).toArray().then((document)=>{
    //     console.log(JSON.stringify(document,null,2))
    // }).catch((err)=>{
    //     console.log(err)
    // });

    // dbo.collection('Todos').find().count().then((count)=>{
    //     console.log(`total ${count}`)
    // }).catch((err)=>{
    //     console.log(err);
    // })


    dbo.collection('users').find({ name : { $regex: "ThaiB"} }).count().then((count)=>{
        console.log(`total ${count}`)
    }).catch((err)=>{
        console.log(err)
    })



    db.close();
});