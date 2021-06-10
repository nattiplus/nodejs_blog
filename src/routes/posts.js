const express = require('express');
const router = express.Router();
const Postscontroller = require('../app/controllers/postscontroller');

// newsController.index
router.get('/create', Postscontroller.create);
router.get('/:id/edit', Postscontroller.update);
router.post('/store', Postscontroller.store);
router.put('/:id', Postscontroller.putupdate);
router.patch('/:id/restore', Postscontroller.restore);
router.delete('/:id', Postscontroller.destroy);
router.delete('/:id/force', Postscontroller.forcedelete);
router.get('/:slug', Postscontroller.show);

module.exports = router;
