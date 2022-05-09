const post = require('express').Router();
const {client} = require('../models/middleware')

client.connect();

// get all posts
post.get('/', async (req, res) => {
    let sql = "SELECT * FROM post ORDER BY post_id"
    client.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(200).json(result.rows)
    })
    client.end;
})

// get a specific post
post.get('/:id', async (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM post WHERE post_id = $1";
    client.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(200).json(result.rows)
    })
    client.end;
})

// create a post
post.post('/', async (req, res) => {
    const title = req.body.title
    const creator = req.body.creator
    const time = new Date().toISOString();
    const date = time
    const description = req.body.description
    const image = req.body.image
    let sql = 'INSERT INTO post(post_id, title, creator, date, description, image) VALUES(DEFAULT, $1, $2, $3, $4, $5)'
    client.query(sql, [title, creator, date, description, image], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(200).json({
            message: 'Successfully created post'
        })
    })
    client.end;
})

// edit a post
post.put('/:id', async (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const creator = req.body.creator
    const description = req.body.description
    const image = req.body.image
    let sql = "UPDATE post SET title = $1, creator = $2, description = $3, image = $4 WHERE post_id = $5"
    client.query(sql, [title, creator, description, image, id], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
         res.status(200).redirect(`https://mernstagram.netlify.app/posts/${req.params.id}`)
    })
    client.end;
})

// delete a post
post.delete('/:id', async (req, res) => {
    id = req.params.id
    let sql = "DELETE FROM post WHERE post_id = $1"
    client.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(200).redirect(`https://mernstagram.netlify.app/`)
    })
    client.end;
})

module.exports = post