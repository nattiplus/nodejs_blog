const express = require('express');
const router = express.Router();
const Mecontroller = require('../app/controllers/mecontroller');

// newsController.index
router.get('/stored/posts', Mecontroller.myposts);
router.get('/trash/posts', Mecontroller.trash);
module.exports = router;
