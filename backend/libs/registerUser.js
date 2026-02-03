import db from './db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




async function registerUser(req, res) {
    const { username, email, password } = req.body;
    const client = await db.connect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        //check all fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        //check after create table
        await client.query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL
        )`);
        //is user exist check
        const userCheck = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }
        //insert data into users table
        await client.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
        //create jwt token
        const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secretkey');
        //set token in cookies header
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
        //release final status to client
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    } finally {
        client.release();
    }
}

export default registerUser;