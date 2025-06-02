const mongoose = require('mongoose')
require('dotenv').config();

console.log(process.env.MONGODB_URI,"env")

const configureDB =() =>{
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(()=>{
            console.log("connected to db")
        })
        .catch((err)=>{
            console.log(err, " error in connecting db")
        })
}

module.exports = configureDB