const config = require('./config/config.json')
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI, config)

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }

app.listen(process.env.PORT, () => {
    console.log(`Live on port: ${process.env.PORT}`)
})