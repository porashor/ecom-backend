import db from "./db.js";
import dotenv from 'dotenv';
dotenv.config();

const productUpload = async (req, res) => {
    const {filename} = req.file;
    const { title, desc, category, brand, price, discount, quantity, totalsale, color, ratings, badge } = req.body;
    const ports = process.env.PORT || 3000
    const image = `http://localhost:${ports}/uploads/${filename}`
    try {
        const client = await db.connect();

        //create a table for products
        const productTable = client.query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                category VARCHAR(255),
                brand VARCHAR(255),
                price DECIMAL(10, 2),
                discount DECIMAL(10, 2),
                quantity INTEGER,
                totalsale INTEGER,
                image VARCHAR(255),
                color VARCHAR(255),
                ratings VARCHAR(255),
                badge VARCHAR(255)
        )`)

        if(!productTable){
            return res.status(500).json({ message: 'Error creating products table' });
        }

        //insert product data into products table
        const product = client.query(`
            INSERT INTO products (title, description, category, brand, price, discount, quantity, totalsale, image, color, ratings, badge)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [title, desc, category, brand, price, discount, quantity, totalsale, image, color, ratings, badge]);

        if(!product){
            return res.status(500).json({ message: 'Error uploading product' });
        }

        //send success response
        res.status(200).json({ message: 'Product uploaded successfully' });
        client.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading product' });
    }
};


export default productUpload;

