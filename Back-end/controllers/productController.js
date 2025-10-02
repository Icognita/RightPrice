const Product = require('../models/product');

exports.registerProduct = async (req, res) => {
  try {
    console.log("📥 Body recebido:", req.body);
    await Product.register(req.body);
    res.status(201).json({ message: 'Product registered successfully' });
  } catch (err) {
    console.error("❌ Erro no registerProduct:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.scanProduct = async (req, res) => {
  try {
    const { barcode } = req.body;
    const results = await Product.searchByCode(barcode);

    if (!results || results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ products: results[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
