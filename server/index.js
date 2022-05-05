const config = require('./config/config.json')
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
    res.send('Welcome to MERNstagram')
})

app.listen(process.env.PORT, () => {
    console.log(`Live on port: ${process.env.PORT}`)
})
