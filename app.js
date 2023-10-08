// const express = require('express')
// const mysql = require("mysql")
// const app = express()
// const port = 3000

// app.get('/', (req, res) =>
// {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'blog',

//   })

//   connection.connect((err) =>
//   {
//     if (err) {
//       console.error('Erreur de connexion à la base de données :' + err.stack);
//     } else {
//       console.log('Connexion à la base de données réussie.');
//     }
//   })


//   // Get les posts
//   const article = []
//   connection.query("SELECT * FROM posts", (err, rows, feilds) =>
//   {
//     if (err) throw err;
//     article = res.json(rows)
//   })

//   app.get('/', (req, res) =>
//   {
//     res.render('pages/index', {
//       user,
//       title: "Home Page"
//     })
//   })
//   app.get('/articles', (req, res) =>
//   {
//     res.render('pages/articles', {
//       articles: article,
//       title: "Articles"
//     })
//   })



//   // Créer un nouveau post
//   app.post('/posts', (req, res) =>
//   {
//     const { title, content } = req.body;
//     const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
//     connection.query(sql, [title, content], (err, result) =>
//     {
//       if (err) throw err;
//       res.json({ message: 'Post créé avec succès', postId: result.insertId });
//     });
//   });

//   // Lire tous les posts
//   app.get('/posts', (req, res) =>
//   {
//     const sql = 'SELECT * FROM posts';
//     connection.query(sql, (err, rows) =>
//     {
//       if (err) throw err;
//       res.json(rows);
//     });
//   });

//   // Lire un post par son ID
//   app.get('/posts/:id', (req, res) =>
//   {
//     const postId = req.params.id;
//     const sql = 'SELECT * FROM posts WHERE id = ?';
//     connection.query(sql, [post_Id], (err, rows) =>
//     {
//       if (err) throw err;
//       if (rows.length === 0) {
//         res.status(404).json({ message: 'Post non trouvé' });
//       } else {
//         res.json(rows[0]);
//       }
//     });
//   });


//   // Update un post par son ID
//   app.put('/posts/:id', (req, res) =>
//   {
//     const postId = req.params.id;
//     const { title, content } = req.body;
//     const sql = 'UPDATE posts SET title = ?, content = ? WHERE poste_Id = ?';
//     connection.query(sql, [title, content, postId], (err, result) =>
//     {
//       if (err) throw err;
//       if (result.affectedRows === 0) {
//         res.status(404).json({ message: 'Post non trouvé' });
//       } else {
//         res.json({ message: 'Post mis à jour avec succès' });
//       }
//     });
//   });


//   // Delete un post par son ID
//   app.delete('/posts/:id', (req, res) =>
//   {
//     const postId = req.params.id;
//     const sql = 'DELETE FROM posts WHERE poste_Id = ?';
//     connection.query(sql, [postId], (err, result) =>
//     {
//       if (err) throw err;
//       if (result.affectedRows === 0) {
//         res.status(404).json({ message: 'Post non trouvé' });
//       } else {
//         res.json({ message: 'Post supprimé avec succès' });
//       }
//     });
//   });

//   connection.end();
// })


// app.listen(port, () => console.log(`server running on http://localhost:${port}`))




const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

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

  app.get('/', (req, res) =>
  {
    res.render('pages/index', {
      title: "Home Page"
    })
  })

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
