var mongoose = require('mongoose');

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',(err)=>{
    if(err)
        return console.log(err);
    console.log("connected to mongodb server");    
});

module.exports={
    mongoose
}