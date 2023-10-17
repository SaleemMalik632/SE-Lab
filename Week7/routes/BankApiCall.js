const express = require('express');
const router = express.Router();
const Api_Function = require('../controllers/BankControllser');


router.post('/Bank', Api_Function.AddNewBank);
router.get('/AllBanks', Api_Function.getallBanks);
router.delete('/Bank/:id', Api_Function.deleteBank);
router.put('/Bank/:id', Api_Function.updateBank);
module.exports = router;


// how to open the node project in other app
// how to write the api in sepates fils