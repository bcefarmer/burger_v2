const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: 'burgers_db'
})

connection.connect((err) => {
    if(err){
        console.error(`Could not connect: ${err.stack}`);
        return;
    }

    console.log(`Connected as id ${connection.threadId}`);


});

module.exports = connection;