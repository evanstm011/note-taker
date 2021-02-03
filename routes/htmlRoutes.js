//depedencies
const router = require("express").Router();
const path = require("path");

//link routes to "/notes > notes.html" 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

//link to all routes to send to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});