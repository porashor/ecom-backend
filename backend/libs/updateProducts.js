import db from './db.js'

async function updateProducts(req, res) {
    const {id} = req.params
    const { title, desc, category, brand, price, discount, quantity, totalsale, color, ratings, badge} = req.body
    //loop to check empty fields
    const upAbleData = Object.fromEntries( Object.entries(req.body).filter(([Key, value])=> {value !== '' && value !== null && value !== undefined}) )
    const allKeys = Object.keys(upAbleData)
    const allValues = Object.values(upAbleData)
    try {
        const client = await db.connect()
        const up = await client.query(`UPDATE products SET ${allKeys.map((key, index) => `${key} = $${index + 1}`).join(', ')} WHERE id = $${id} RETURNING *`, [...allValues])
        res.status(200).json({
            status: 'success',
            data: {
                product: up.rows[0]
            }
        })
    } catch (error) {
        console.log(error)
    }finally{
        db.release()
    }
}



export default updateProducts