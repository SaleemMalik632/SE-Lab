const express = require('express');
const router = express.Router();
const Api_Function = require('../controllers/productController');

router.post('/Prodect', Api_Function.AddData);
router.get('/Allprodects', Api_Function.getallProducts);

module.exports = router;


// how to open the node project in other app
// how to write the api in sepates fils 