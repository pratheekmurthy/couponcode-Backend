const express = require('express')
var cors = require('cors');
const configureDB = require('./config/database')

const app =express()


app.use(express.json())
app.use(cors())

configureDB()
const router = require('./config/routes')
app.use(router)

const port = 3076






app.listen(port,()=>{
    console.log("server is running on ",port)
})