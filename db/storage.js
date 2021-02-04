const fs = require("fs");
const util = require("util");
//creates unique id's for new notes created
const { v4: uuidv4 } = require('uuid');


//create variables to read and write and files using fs
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile)

class Storage{
//make function to read files from db.json

//make function to write files to db.json

//make function to get notes

///make a function to add notes

//make a function to delete notes



}

module.exports = new Storage();