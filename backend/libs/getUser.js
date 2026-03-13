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

async function getSelfUser(req, res) {
    const client = await db.connect();
    const {username, email} = req.user;
    try {
        const result = await client.query('SELECT * FROM user_profile WHERE email = $1', [email]);
        const data = {...result.rows[0], username};
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting user' });
    } finally {
        client.release();
    }   
}
export { getSelfUser };
export default getUser;