// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var  obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err)
        return console.log("Unable to connect to MongoDB server");
    console.log("Conected to MongoDB server");
    let dbo=db.db('todoApp');
    
    // //deleteMany
    // dbo.collection('Todos').deleteMany({text : "Hello1"}).then((res)=>{
    //     console.log(res);
    // }).catch()
    // //deleteOne
    // dbo.collection('Todos').deleteOne({text : "Hello1"}).then((res)=>{
    //     console.log(res);
    // }).catch()

    // dbo.collection('Todos').findOneAndDelete({text : "Hello1"}).then((res)=>{
    //     console.log(res);
    // }).catch()

    // dbo.collection('users').findOne({name : "me"}).then((res)=>{
    //     console.log(res);
    //     if(res){
    //         return dbo.collection('users').deleteOne({_id : res._id});
    //     }
    // }).then((res)=>{
    //     console.log(res);
    // })
    dbo.collection('users').findOneAndUpdate({name : "ThaiB2"},{
        $set : {
            name : "Thai Bao",
            gender: "men"
        },
        $inc : {age : 1}
    },{
        returnOriginal : false
    }).then((res)=>{
        console.log(res);
    })

   db.close();
});