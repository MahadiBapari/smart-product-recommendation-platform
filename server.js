const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');




dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));