const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<em>This is one funky test. My routes are now modular - check them out.</em>');
});

module.exports = router;