const express = require('express');
const router = express.Router();
const Newscontroller = require('../app/controllers/newscontroller');

// newsController.index
router.get('/:slug', Newscontroller.show);
router.get('/', Newscontroller.index);

module.exports = router;
