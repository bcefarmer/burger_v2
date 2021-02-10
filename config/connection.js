const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    port: 3306,
    user:'bc72310d46fc46' ,
    password: '81dd0646',
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