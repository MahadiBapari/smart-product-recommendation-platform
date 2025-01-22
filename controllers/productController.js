const Product = require('../models/productModel');

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getProductById(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) return res.status(404).json({ error: 'Product not found' });

            res.json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createProduct(req, res) {
        const { name, category, price, description, imageUrl } = req.body;

        try {
            const product = await Product.create({ name, category, price, description, imageUrl });
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateProduct(req, res) {
        const { name, category, price, description, imageUrl } = req.body;

        try {
            const product = await Product.findByIdAndUpdate(
                req.params.id,
                { name, category, price, description, imageUrl },
                { new: true }
            );

            if (!product) return res.status(404).json({ error: 'Product not found' });

            res.json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) return res.status(404).json({ error: 'Product not found' });

            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ProductController;
