const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


// we dont need /blogs anymore as all these are scoped to /blogs in the router
router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);


// blogs/create route must be above the blogs/:id route if not, we wont be able to reach the create page
router.get('/create', blogController.blog_create_get);

router.get('/edit/:id', blogController.blog_edit);

router.put('/:id', blogController.blog_update);

router.delete('/:id', blogController.blog_delete);

router.get('/:id', blogController.blog_details);

module.exports = router;