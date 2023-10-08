const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog'
})

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :' + err.stack);
  } else {
    console.log('Connexion à la base de données réussie.');
  }
})

module.exports = connection;