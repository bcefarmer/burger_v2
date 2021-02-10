const ormImport = require('../config/orm.js');
const orm = ormImport.orm;

const brg = {
all(cb){
    orm.selectAll((res)=> cb(res));
},        

create(cols, vals, cb) {
        orm.insertOne(cols, vals, (res) => cb(res));
    },

deleteAll(cb){
    orm.deleteAll((res) => cb(res));
},


updateOne(id, cb){
    orm.updateOne(id, (res) => cb(res));
}

}

module.exports = {brg};