const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    let form = '<form action="add-product" method="POST">';
    form += '<input type="text" name="product" />';
    form += '<button>Send</button>';
    form += '</form>';
    res.send(form);
});

router.post('/add-product', (req, res, next) => {
    console.log('product name = ', req.body.product);
    res.redirect('/');
});
module.exports = router;