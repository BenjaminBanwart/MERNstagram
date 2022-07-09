const express = require('express')
require('dotenv').config()
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()
const path = require('path')
// const { Sequelize } = require('sequelize')


require('dotenv').config();
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

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
