const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()
// const { Sequelize } = require('sequelize')


require('dotenv').config();
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the MERNstagram API'
    })
})

const postsController = require('./controller/post_controller')
app.use('/posts', postsController)

app.listen(process.env.PORT, () => {
    console.log(`Live on port: ${process.env.PORT}`)
})
