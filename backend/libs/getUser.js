import db from './db.js';


async function getUser(req, res) {
    const client = await db.connect();
    try {
        const result = await client.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting user' });
    } finally {
        client.release();
    }
}

export default getUser;