const notes = require("../db/db.json")
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { title } = require("process");

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        return res.json(getNotes())
    });

    app.post('/api/notes', (req, res) => {
        let newNote = {
            id: uuidv4(),
            title: req.body["title"],
            text: req.body["text"]
        }
        return res.json(addNote(newNote))
    })

    app.delete('/api/notes/:id', (req, res) => {
        // console.log(req.params.id)
        return res.json(removeNote(req.params.id))
    })

}
function getNotes() {
    let path = require('path').resolve(__dirname, '../db/db.json');
    let rawdata = fs.readFileSync(path);
    let notes1 = JSON.parse(rawdata);
    return notes1
}


function addNote(newNote) {
    let path = require('path').resolve(__dirname, '../db/db.json');
    let rawdata = fs.readFileSync(path);
    let notes1 = JSON.parse(rawdata);
    notes1.push(newNote)
    fs.writeFileSync(path, JSON.stringify(notes1))
    return notes1;
}

function removeNote(idToRemove) {
    let path = require('path').resolve(__dirname, '../db/db.json');
    let rawdata = fs.readFileSync(path);
    let notes1 = JSON.parse(rawdata);
    newNotes = notes1.filter(note => note.id !== idToRemove)
    fs.writeFileSync(path, JSON.stringify(newNotes))
    return newNotes
}