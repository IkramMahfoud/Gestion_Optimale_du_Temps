const db = require('../db'); // Import the database connection

// Function to get all articles
function getAllArticles(req, res) {
  db.query('SELECT * FROM articles', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving articles' });
    }
    res.json(rows);
  });
}

// Function to get an article by ID
function getArticleByTitle(req, res) {
  const articleId = req.params.id;
  db.query('SELECT * FROM articles WHERE id = ?', [articleId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving the article' });
    }
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(rows[0]);
  });
}



// with date alsoo !!! 
// Function to create a new article
function createArticle(req, res) {
  const { title, content } = req.body;
  db.query('INSERT INTO articles (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating the article' });
    }
    res.json({ message: 'Article created successfully', articleId: result.insertId });
  });
}

// Function to update an article by ID
function updateArticle(req, res) {
  const articleId = req.params.id;
  const { title, content } = req.body;
  db.query('UPDATE articles SET title = ?, content = ? WHERE id = ?', [title, content, articleId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error updating the article' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article updated successfully' });
  });
}

// Function to delete an article by ID
function deleteArticle(req, res) {
  const articleId = req.params.id;
  db.query('DELETE FROM articles WHERE id = ?', [articleId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting the article' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  });
}

module.exports = {
  getAllArticles,
  getArticleByTitle,
  createArticle,
  updateArticle,
  deleteArticle,
};
