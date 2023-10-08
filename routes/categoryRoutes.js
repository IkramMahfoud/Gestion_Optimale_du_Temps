const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Define article-related routes here
router.get('/:category', articleController.getArticlesByCategory); // Get articles by category

module.exports = router;