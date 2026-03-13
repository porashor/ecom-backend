import db from './db.js';

// phone, address, image, created_at, updated_at, role, email, payment , total spand

const updateUsers = async (req, res) => {
    const { phone, address } = req.body;
    const email = req.user.email;
    const image = req.file ? req.file.path : null;
    const imageLink = image ? `${req.protocol}://${req.get('host')}/${image}` : null;
    const client = await db.connect();
    console.log("Updating user profile for:", email);
    try {
        //create update user table 
        const crtTable = await client.query(`CREATE TABLE IF NOT EXISTS user_profile (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            phone VARCHAR(20),
            address TEXT,
            image TEXT,
            role VARCHAR(50) DEFAULT 'user',
            payment Boolean DEFAULT false,
            total_spent NUMERIC(10, 2) DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);
        if(!crtTable) return res.status(500).json({ success: false, message: 'Error creating profile table' });
        //check if user profile exist
        const result = await client.query(`INSERT INTO user_profile (email, phone, address, image)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (email) DO UPDATE SET
        phone = EXCLUDED.phone,
        address = EXCLUDED.address,
        image = EXCLUDED.image,
        updated_at = CURRENT_TIMESTAMP
        RETURNING *`, [email, phone, address, imageLink]);
        if(result.rows.length === 0) return res.status(500).json({ success: false, message: 'Error updating profile' });
        res.status(200).json({ success: true, message: 'Profile updated successfully', profile: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error updating profile' });
    } finally {
        client.release();
    }
}



export default updateUsers;