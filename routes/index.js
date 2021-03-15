const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/library', (req, res) => {
    res.send('<strong>Testing a separate route.</strong>');
});

module.exports = router;