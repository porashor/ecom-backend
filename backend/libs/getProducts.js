import db from "./db.js";



async function getProducts(req, res) {
    try{
        const client = await db.connect()
        const data = await client.query('SELECT * from products')
        res.status(200).json(data.rows)
    }catch(err){
        console.log(err)
    }finally{
        db.release()
    }
}


export default getProducts