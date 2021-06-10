const Post = require('../models/Post');
const { multipleMongooseToObject } = require('../../util/mongoose');
class Sitecontroller {
    // [Get] /
    index(req, res, next) {
        Post.find({})
            .then((Posts) => {
                // Posts = Posts.map(post => post.toObject())
                res.render('home', {
                    Posts: multipleMongooseToObject(Posts),
                });
            })
            .catch(next);
        // res.render('home');
    }
    // [Get] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new Sitecontroller();
