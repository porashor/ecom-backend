import express from 'express';
import deliverySuccess from '../libs/deliverySuccess.js'
const router = express.Router();



router.get('/', (req, res) => {
    res.send('Delivery Done Route');
});

router.post('/success', async (req, res) => deliverySuccess(req, res));



export default router;