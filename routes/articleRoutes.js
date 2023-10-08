const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Define your article-related routes here
router.get('/', articleController.getAllArticles);
router.get('/:title', articleController.getArticleByTitle);
router.get('/:title', articleController.getArticlesByCategory);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;