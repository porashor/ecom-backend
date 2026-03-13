import db from "./db.js";
import dotenv from 'dotenv';
dotenv.config();

const productUpload = async (req, res) => {
    const {filename} = req.file;
    const { title, desc, cetagory, brand, price, quantity, badge } = req.body;
    const ports = process.env.PORT || 3000
    const image = `http://localhost:${ports}/uploads/${filename}`
    console.log(req.body);
    try {
        if(!title || !price || !cetagory || !quantity || !brand || !badge || !desc){
            return res.status(400).json({ message: 'Please fill all the fields' });
        }
        const client = await db.connect();

        //create a table for products
        const productTable = await client.query(`
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
        const product = await client.query(`
            INSERT INTO products (title, description, category, brand, price, discount, quantity, totalsale, image, color, ratings, badge)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [title, desc, cetagory, brand, price, "0", quantity, "0", image, 'no', "0", badge]);

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

