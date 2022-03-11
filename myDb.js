
const express = require('express')
const cors = require('cors');
const {insertToDb} = require('./insertImageDetails');
const app = express()
const port = 3000
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/imagedetails', (req, res)=> {

    // console.log(req.body.name)

    const urls = req.body.data.urls
    insertToDb(urls);
    urls.forEach(url => {
            console.log(url);
    });
    res.end();
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });

//   var sql = "CREATE TABLE customers (fileName VARCHAR(255), location VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });
