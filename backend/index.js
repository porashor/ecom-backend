import express from 'express';
import dotenv from 'dotenv';
import products from './routes/productData.js';
import auth from './routes/auth.js';
import cookieParser from 'cookie-parser';
import orderManage from './routes/orderManage.js';
import deliveryDone from './routes/deliveryDone.js';


dotenv.config();
const app = express();
//-------all use methods here-------//
app.use(express.json());
app.use(cookieParser());
app.use('/products', products);
app.use('/auth', auth);
app.use('/orders', orderManage);
app.use('/delivery', deliveryDone);

const PORT = process.env.PORT || 5000;


//-------all route methods here-------//
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

