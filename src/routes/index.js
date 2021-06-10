const newsRouter = require('./news');
const siteRouter = require('./site');
const postRouter = require('./posts');
const meRouter = require('./me');

function route(app) {
    app.use('/posts', postRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
