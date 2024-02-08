const express = require('express');
const mysql =  require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host     : 'localhost',  // or the IP address of your MySQL server
  user     : 'root',
  password : '',
  database : 'order'
});

app.get('/customer', (req, res) => {
    connection.query("SELECT * FROM customer", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.get('/list', (req, res) => {
    connection.query("SELECT * FROM list", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.get('/finance', (req, res) => {
    connection.query("SELECT * FROM finance", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.get('/status', (req, res) => {
    connection.query("SELECT * FROM status", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.get('/data', (req, res) => {
    connection.query("SELECT * FROM customer INNER JOIN list ON customer.id = list.id  INNER JOIN finance ON customer.id = finance.id INNER JOIN status ON customer.id = status.id", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.listen('3001', () => {
    console.log('server run at port 3001');
})