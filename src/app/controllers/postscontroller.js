const Post = require('../models/Post');
const { mongooseToObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class postscontroller {
    // [Get] /posts/:slug
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug })
            .then((post) =>
                res.render('posts/show', { post: mongooseToObject(post) }),
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('posts/create');
    }

    store(req, res, next) {
        const post = new Post(req.body);
        post.save()
            .then(() => res.redirect('/me/stored/posts'))
            .catch((error) => {});
    }

    // [GET] /posts/:id/edit
    update(req, res, next) {
        Post.findById(req.params.id)
            .then((posts) =>
                res.render('posts/update', {
                    posts: mongooseToObject(posts),
                }),
            )
            .catch(next);
    }
    putupdate(req, res, next) {
        Post.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/posts'))
            .catch(next);
    }
    destroy(req, res, next) {
        Post.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /posts/:id/restore
    restore(req, res, next){
        Post.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    forcedelete(req, res, next){
        Post.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }
}
module.exports = new postscontroller();
