import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json());
/*
    host: "localhost",
    user: 'motorhome_carryboymotorhome',
    password: 'Nest1007',
    database: 'motorhome_carryboymotorhome'
    host: "localhost",
    user: 'root',
    password: '',
    database: 'carryboymotorhome'
*/
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'carryboymotorhome'
})

app.get('/', (re, res) => {
    return res.json("From backend side")
})

app.get('/seller', (req, res) => {
    const sql = "SELECT * FROM seller";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8082, () => {
    console.log("listening")
})