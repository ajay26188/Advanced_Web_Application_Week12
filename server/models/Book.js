const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let bookSchema = new Schema ({
    author: {type: String},
    name: {type: String},
    pages: Number

});

module.exports = mongoose.model("Book", bookSchema);
