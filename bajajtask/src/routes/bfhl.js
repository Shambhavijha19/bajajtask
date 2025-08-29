const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ error: 'Invalid input, expected an array.' });
    }

    const categorizedData = {
        strings: [],
        numbers: [],
        others: []
    };

    data.forEach(item => {
        if (typeof item === 'string' && isNaN(item)) {
            categorizedData.strings.push(item);
        } else if (!isNaN(item)) {
            categorizedData.numbers.push(Number(item));
        } else {
            categorizedData.others.push(item);
        }
    });

    res.status(200).json(categorizedData);
});

module.exports = router;