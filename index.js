const express = require('express')
require('dotenv').config();
var cors = require('cors');
const configureDB = require('./config/database')

const app =express()


app.use(express.json())
app.use(cors({
    origin: '*', // Or restrict to your IP or domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }))

configureDB()
const router = require('./config/routes')
app.use('/api', router)

const port = 3076






app.listen(port,()=>{
    console.log("server is running on ",port)
})