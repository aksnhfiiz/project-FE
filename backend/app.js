const express = require('express');
const app = express();
const conn = require('./config/db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/get-account', function (req, res) {
    const queryStr = "SELECT id, username, name, email FROM account WHERE deleted_at IS NULL";
    conn.query(queryStr, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success" : false,
                "message" : err.sqlMessage,
                "data" : null
            });
        } else {
            console.log("Results from DB:", results);
            res.status(200).json({
                "success" : true,
                "message" : "Sukses menampilkan data",
                "data" : results
            });
        }
    });
});


app.post('/store-account', function (req, res) {
    console.log(req.body);
    const param = req.body;
    const username = param.username;
    const name = param.name;
    const email = param.email;
    const now = new Date();

    const queryStr = "INSERT INTO account (username, name, email, created_at) VALUES (?, ?, ?, ?)";
    const values = [username, name, email, now];

    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success" : false,
                "message" : err.sqlMessage,
                "data" : null
            });
        } else {
            res.status(200).json({
                "success" : true,
                "message" : "Sukses menyimpan data",
                "data" : results
            });
        }
    })
})

app.post('/update-account', function (req, res) {
    const param = req.body;
    const id = param.id;
    const username = param.username;
    const name = param.name;
    const email = param.email;

    const queryStr = "UPDATE account SET username = ?, name = ?, email = ? WHERE id = ? AND deleted_at IS NULL";
    const values = [username, name, email, id];

    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success": false,
                "message": err.sqlMessage,
                "data": null
            });
        } else {
            res.status(200).json({
                "success" : true,
                "message" : "Sukses menampilkan data",
                "data": results
            });
        }
    });
})

app.post('/delete-account', function (req, res) {
    const param = req.body;
    const id = param.id;
    const now = new Date();

    const queryStr = "UPDATE account SET deleted_at = ? WHERE id = ?";
    const values = [now, id];

    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "seccuess": false,
                "message": err,sqlMessage,
                "data": null
            });
        } else {
            res.status(200).json({
                "success": true,
                "message": "Sukses menampilkan data",
                "data": results
            });
        }
    })
    
})

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
