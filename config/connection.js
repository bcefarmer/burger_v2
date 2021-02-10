const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    port: process.env.PORT || 3606,
    user: process.env.USER_NAME ,
    password: process.env.PASSWORD,
    database: 'heroku_4172c875356108e'
})

connection.connect((err) => {
    if(err){
        console.error(`Could not connect: ${err.stack}`);
        return;
    }

    console.log(`Connected as id ${connection.threadId}`);


});

module.exports = connection;