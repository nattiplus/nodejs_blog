class newcontroller {
    // [Get] /news
    index(req, res) {
        res.render('news');
    }
    // [Get] /new/:slug
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}
module.exports = new newcontroller();
