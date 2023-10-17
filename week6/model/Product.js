const mongoose = require('mongoose');

// this is the schema for the Product table in the database (database name: test) IS IS USED IN THE CONTROLLER FILE (controllers/productController.js)

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);