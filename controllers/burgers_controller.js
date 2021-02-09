const express = require("express");
const router = express.Router();
const burg = require("../models/burger.js");
const brg = burg.brg;


// ------------------------------------------

router.get('/', (req, res) => {
    brg.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });

});

// --------------------------------------------

router.post('/api/burgers', (req, res) => { 
    brg.create(["burger_name"], [req.body.burger_name], (result) => {
        
        res.json({id: result.insertId});
    });

});

// --------------------------------------------
// DELETE
router.delete('/api/burgers/delete', (req, res) => { 
    brg.deleteAll((result) => {
        
        res.json(result);
    });

});

// --------------------------------------------

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log("condition: " + condition);

    brg.updateOne(
        [req.params.id],
        (result)=> {
            if (result.changedRows === 0){
                return res.status.apply(404).end();
            }
            else{
            res.status(200).end();
            }
        }

    )
}


)

module.exports = {router};