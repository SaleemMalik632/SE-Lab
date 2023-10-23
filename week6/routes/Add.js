const express = require('express');
const router = express.Router();
const Api_Function = require('../controllers/productController');
router.post('/prodect', Api_Function.AddData);
router.get('/all', Api_Function.getallProducts);
router.put('/update/:id', Api_Function.update);
router.delete('/delete/:id', Api_Function.Delete);
module.exports = router;
