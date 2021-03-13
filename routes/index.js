const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<em>This is one funky test. My routes are now modular - check them out.</em>');
});

router.get('/library', (req, res) => {
    res.send('<strong>Testing a separate route.</strong>');
});

module.exports = router;