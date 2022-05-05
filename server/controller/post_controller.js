const post = require('express').Router();
// const db = require('../models');
// const { Post } = db;
const { Op, where } = require('sequelize');
const { Post } = require('../models/post')
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
    const post_id = req.params.id;
    const title = req.params.title;
    const creator = req.params.creator
    const date = req.params.date
    const description = req.params.description
    const image = req.params.image
    let sql = 'INSERT INTO post(post_id, title, creator, date, description, image) VALUES($1, $2, $3, $4, $5, $6)'
    client.query(sql, [post_id, title, creator, date, description, image], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        // result.status(200).json({
        //     message: 'Successfully created post'
        // })
        res.status(200).json(result.rows)
    })
    client.end;
})

// edit a post
post.put('/:id', async (req, res) => {
    try {
        const edittedPost = await Post.update(req.body, {
            where: {
                post_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${edittedPost} post`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete a post
post.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.destroy({
            where: {
                post_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedPost} post`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = post