import express from 'express';
import productUpload from '../libs/productUpload.js';
import getProducts from '../libs/getProducts.js';
import photoupload from '../middleware/photoupload.js';

const router = express.Router();



router.get('', async (req, res) => getProducts(req, res));

router.post("/upload", photoupload, async (req, res)=> productUpload(req, res))


export default router;



