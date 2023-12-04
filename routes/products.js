const express = require('express');

const router = express.Router();
const {
  createProduct,
  okify,
  getAllProducts,
} = require('../controllers/product.js');
const imageUpload = require('../middlewares/uploadImage.js');

router.get('/', getAllProducts);

router.post('/', imageUpload.single('image'), createProduct);
router.post('/image', imageUpload.single('thingy'), okify);

module.exports = router;
