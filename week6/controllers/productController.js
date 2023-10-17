const Product = require('../model/Product');

// this is called from the route file (routes/Add.js) when a POST request is made to /api/add
// this is adding data to the database table by using the Product model (model/Product.js)
async function AddData(req, res) {
  try {

    const result = await Product.create(req.body);
    res.status(201).json(result);

  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).send('An error occurred while adding data to the table');
  }
}

async function getallProducts(req, res) {
  try {
    const Data = await Product.find();
    res.json(Data);
  } catch (error) {
    res.status(500).json({ error: error.mesage })
  }
}

// make the update api for the product
async function update(req, res) {
  try {
    const Data = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json(Data);
  } catch (error) {
    res.status(500).json({ error: error.mesage })
  }
}



// making the delete api for the product
async function Delete(req, res) {
  try {
    const Data =  await  Product.deleteOne({ _id: req.params.id });
    res.json(Data);
  } catch (error) {
    res.status(500).json({ error: error.mesage })
  }
}




module.exports = {
  AddData,
  getallProducts,
  update,
  Delete,


}