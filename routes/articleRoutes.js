const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Define your article-related routes here
router.get('/article', (req, res) => {
  articleController.getAllArticles(req, res, (err, articles) => {
    if (err) {
      // Handle the error here, e.g., send an error response or render an error view
      console.error('Error retrieving articles:', err);
      return res.status(500).json({ error: 'Error retrieving articles' });
    }
    // If there are no errors, render the view with the retrieved articles
    res.render('pages/articles', { articles });
  });
});


router.get('/', (req, res) =>
{
  res.render("pages/index");
}
);

router.get('/:title', articleController.getArticleByTitle);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;