import express from 'express';
import PlacingOrder from '../libs/PlacingOrder.js';
import loggedInCheck from '../middleware/loggedinCheck.js';
const router = express.Router();



router.get('/', (req, res) => {
    res.send('Order Management Home');
});



router.post("/place", loggedInCheck, async (req, res)=> PlacingOrder(req, res))


export default router;