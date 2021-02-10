const connected = require("./connection");
const connection = connected.connection;

// ---------------------------------------

const orm = {
    // SELECT ALL BURGERS ------------------------------------
selectAll(cb){
  let queryString = 'SELECT * FROM burgers;';

    connection.query(
        queryString,
        (err, result) => {
            if(err) throw err;
            cb(result);
        }
    )},

    // INSERT A SINGLE BURGER -----------------------------------

    insertOne (cols, vals, cb) { 
        let queryString = `INSERT INTO burgers(${cols.toString()}) VALUES('${vals}');`;
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },

    deleteAll(cb){
        let queryString = 'DELETE FROM burgers;';
      
          connection.query(
              queryString,
              (err, result) => {
                  if(err) throw err;
                  cb(result);
              }
          )},

// UPDATE A BURGER ------------------------------
updateOne(id, cb){
console.log("In orm.js, id is " + id);
let queryString = `UPDATE burgers SET devoured = 1 WHERE id = ${parseInt(id)};`;

connection.query(queryString, (err, result) => {
    if(err) throw err;
    cb(result);

});
},
}
// ---------------------------------------
module.exports = {
  orm
}