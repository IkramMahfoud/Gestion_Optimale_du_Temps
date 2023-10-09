// import joi
const Joi = require('joi');


// should add joi validation scheema



// conex
const db = require('../routes/db');

//get all articles
function getAllArticles(req, res, callback) {
  db.query('SELECT * FROM posts', (err, rows) => {
    if (err) {
      // Handle the error, and pass it to the callback
      return callback(err, null);
    }
    // Pass the retrieved data to the callback
    callback(null, rows);
  });
}



//get an article by title
function getArticleByTitle(req, res) {
  const articleId = req.params.id;
  db.query('SELECT * FROM posts WHERE post_Id = ?', [articleId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving the article' });
    }
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(rows[0]);
  });
}


// Get articles by category
  function getArticlesByCategory(req, res) {
    const categoryName = req.params.categoryName;
    db.query('SELECT p.* FROM posts p JOIN category c ON p.post_Id = c.post_Id WHERE c.category_name = ?', [categoryName], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving articles by category' });
      }
      if (rows.length === 0) {
        return res.status(404).json({ message: 'No articles found for this category' });
      }
      res.json(rows); // Return a list of articles in this category
    });
  }

// with date alsoo !!! and picture
//create a new article
function createArticle(req, res) {
  const { post_Id, title, content, picture , publishing_date } = req.body;
  db.query('INSERT INTO posts (post_Id, title, content , picture , publishing_date) VALUES (?, ?, ?, ?, ?)', [post_Id, title, content, picture , publishing_date], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating the article' });
    }
    res.json({ message: 'Article created successfully', articleId: result.insertId });
  });
}

//update an article by ID
function updateArticle(req, res) {
  const articleId = req.params.post_Id;
  const { title, content } = req.body;
  db.query('UPDATE posts SET title = ?, content = ? WHERE post_Id = ?', [articleId, title, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error updating the article' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article updated successfully' });
  });
}

//delete an article by ID
function deleteArticle(req, res) {
  const articleId = req.params.id;
  db.query('DELETE FROM posts WHERE post_Id = ?', [articleId], (err, result) => {
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
  getArticlesByCategory
};

