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
        const emails = jwt.verify(token, process.env.JWT_SECRET || 'secretkey').email;
        console.log(emails)
        const result = await client.query('SELECT * FROM users WHERE email = $1', [emails]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const {username, email} = result.rows[0];
        req.user = {username, email};
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
    res.status(200).json({ success: true, message: 'User logged out successfully' });
}


export default loggedInCheck;