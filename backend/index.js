import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './routes/productData.js';
import auth from './routes/auth.js';
import cookieParser from 'cookie-parser';
import orderManage from './routes/orderManage.js';
import deliveryDone from './routes/deliveryDone.js';
import user from './routes/user.js';

const options = { origin: "http://localhost:5173", methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }

dotenv.config();
const app = express();
//-------all use methods here-------//
app.use(express.json());
app.use(cookieParser());
app.use(cors(options));
app.use('/products', products);
app.use('/auth', auth);
app.use('/orders', orderManage);
app.use('/delivery', deliveryDone);
app.use('/user_profile', user);
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;


//-------all route methods here-------//
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

