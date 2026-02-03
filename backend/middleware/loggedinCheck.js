import db from '../libs/db.js';
import jwt from 'jsonwebtoken';
async function loggedInCheck(req, res, next) {
    const token = req.cookies.token;
    console.log("Token:", token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const client = await db.connect();
    try {
        //get token and convart it to a user email
        const email = jwt.verify(token, process.env.JWT_SECRET || 'secretkey').email;
        console.log(email)
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = result.rows[0];
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error checking user' });
    } finally {
        client.release();
    }
}

export const signOutUser = (res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
}


export default loggedInCheck;