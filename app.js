var express = require('express');
var cors = require("cors")
var app = express();

var port = process.env.PORT || 3000;
app.use(cors());

// MySQL
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'sakila'
});

connection.connect();


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/actors/:letter', (req, res) => {
    let { letter } = req.params;

    connection.query('SELECT * FROM actor_info WHERE last_name LIKE ?', [letter + '%'] ,function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});


app.get('/info/:id', (req, res) => {
    let { id } = req.params;

    connection.query('SELECT first_name, last_name, film_info FROM actor_info WHERE actor_id = ?', [ id ], (err, results) => {
        if (err) throw new Error(err);
      res.json(results);
      //console.log(results);
    });

});


require('./services/errorHandlers')(app);

module.exports = app;
