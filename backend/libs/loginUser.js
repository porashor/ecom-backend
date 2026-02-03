import db from './db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function loginUser(req, res) {
    const { email, password } = req.body;
    const client = await db.connect();
    try {
        //check all fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        //check user existence and find user by email
        const result = await client.query('SELECT * FROM users WHERE email = $1 ', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email' });
        }
        const user = result.rows[0];
        //compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        //create token and send response
        const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secretkey');
        //set token in cookies header
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
        //final response
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error logging in user' });
    } finally {
        client.release();
    }
}



export default loginUser;