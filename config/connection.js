const mysql = require("mysql");
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
    else {
         connection = mysql.createConnection({
          host: process.env.HOST_NAME,
          user: process.env.USER_NAME,
          password: process.env.P_W,
          database: 'burgers_db'
        });
      };

     

connection.connect((err) => {
    if(err){
        console.error(`Could not connect: ${err.stack}`);
        return;
    }

    console.log(`Connected as id ${connection.threadId}`);


});

module.exports = {connection}