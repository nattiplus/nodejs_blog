const Post = require('../models/Post');
const { multipleMongooseToObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class mecontroller {
    // [GET] /me/stored/posts
    myposts(req, res, next) {
        Promise.all([Post.find({}), Post.countDocumentsDeleted()])
            .then(([posts, deletedPost]) =>
                res.render('me/myposts', {
                    deletedPost,
                    posts: multipleMongooseToObject(posts)
                })
            )
            .catch(next)

        // Post.find({})
        //     .then((posts) =>
        //         res.render('me/myposts', {
        //             posts: multipleMongooseToObject(posts),
        //         }),
        //     )
        //     .catch(next);
    }

        // [GET] /me/trash/posts
        trash(req, res, next) {
            Post.findDeleted({})
                .then((posts) =>
                    res.render('me/trash', {
                        posts: multipleMongooseToObject(posts),
                    }),
                )
                .catch(next);
        }
}
module.exports = new mecontroller();
