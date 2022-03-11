var mysql = require('mysql');

function insertToDb( urlList ) {


    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "TestNode"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = `INSERT INTO image_info (url) VALUES ('${urlList[0]}')`;
    
    //   urlList.forEach(url => {
          
    //   });

    console.log(sql)
      
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });

}


module.exports = {insertToDb}