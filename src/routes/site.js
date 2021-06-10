const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controllers/SiteController');

// newsController.index
router.get('/search', sitecontroller.search);
router.get('/', sitecontroller.index);

module.exports = router;
