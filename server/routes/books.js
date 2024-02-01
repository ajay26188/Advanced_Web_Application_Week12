const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.post('/api/book',async(req,res) => {
    const {author, name, pages} = req.body;
    

})

module.exports = router;
