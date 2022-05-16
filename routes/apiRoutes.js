const router = require('express').Router();
const db = require ('../db/db.json');
const fs = require('fs')


router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {
    db.push(req.body);
    res.json(db)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
})



 module.exports = router;