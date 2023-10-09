const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Import routes
//mazal route categories.
const articleRoutes = require('./routes/articleRoutes');

// Middleware for parsing JSON requests
app.use(express.json());

// Use your routes
app.use('/articles', articleRoutes);

app.get('/articles', (req, res) =>
  {
    res.render('pages/articles', {
      articles: article,
      title: "Articles"
    })
  })

  // app.get('/', (req, res) =>
  // {
  //   res.render('pages/index', {
  //     title: "Home Page"
  //   })
  // })
  app.use(articleRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
