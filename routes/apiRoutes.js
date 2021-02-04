const { request } = require("http")

//dependencies
const router = require("express").router();
const storage = require("../db/storage.js");

//Get notes from "/api/notes" stored in db.json
router.get(`/api/notes`, (req, res) => {
    //getNotes function from index.js
    storage.getNotes().then((notes) => res.json(notes))
})

//Save notes on the request body and add to the storage variable
router.post(`/api/notes`, (req, res) => {
    //saveNotes function from index.js
    storage.saveNote(req.body)
        .then((note) => res.json(note))
})

