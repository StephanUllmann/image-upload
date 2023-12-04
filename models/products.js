const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Product', productSchema);
