const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);

const Post = new Schema(
    {
        title: { type: String, maxLength: 100, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        videoID: { type: String, require: true },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

// Plugin
Post.plugin(mongooseDelete, { 
    overrideMethods: 'all', 
    deletedAt : true 
})
mongoose.plugin(slug)

module.exports = mongoose.model('Post', Post);
