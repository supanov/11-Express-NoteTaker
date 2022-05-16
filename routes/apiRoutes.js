const router = require('express').Router();
let db = require ('../db/db.json');
const fs = require('fs')


router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {
    req.body.id = db.length+1
    db.push(req.body);
    res.json(db)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
})

router.delete('/notes/:id', (req, res) =>{
const id = req.params.id
db= db.filter(note => note.id != id)
res.json(db)
fs.writeFileSync("./db/db.json", JSON.stringify(db))
})



 module.exports = router;