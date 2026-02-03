import db from './db.js'



async function PlacingOrder(req, res) {
    const {email} = req.user;
    const {title, category, brand, price, quantity, image} = req.body;
    const status = 'pending';
    try{
        const client = await db.connect()
        //create table
        const createTableQuery = await client.query(`CREATE TABLE IF NOT EXISTS orders (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            brand VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            quantity INTEGER NOT NULL,
            image VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL,
            order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);
        if(!createTableQuery){
            console.log("Table creation failed");
            return res.status(500).json({message: 'Failed to create orders table'});
        }
        //insert order data
        const insertOrderQuery = await client.query(`INSERT INTO orders (email, title, category, brand, price, quantity, image, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, 
        [email, title, category, brand, price, quantity, image, status]);
        if(!insertOrderQuery){
            console.log("Order insertion failed");
            return res.status(500).json({message: 'Failed to insert order'});
        }
        res.status(200).json({message: 'Order placed successfully'});
        //final response send 
    }catch(error){
        console.log(error)
    }finally{
        db.release()
    }
}



export default PlacingOrder



