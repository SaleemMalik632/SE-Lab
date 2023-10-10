const Product = require('../model/Product');

async function AddData(req, res) {
  try {

    const result = await Product.create(res.body);
    res.status(201).json(result);

  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).send('An error occurred while adding data to the table');
  }
} 


async function getallProducts(req, res) {
   try{
       const Data = Product.find();
       res.json(Data);
   }catch(error){
        res.status(500).json({error:error.mesage}) 
   }
}


module.exports = {
    AddData,
    getallProducts
}