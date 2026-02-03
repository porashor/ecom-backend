import express from 'express';
import registerUser from '../libs/registerUser.js';
import getUser from '../libs/getUser.js';
import loginUser from '../libs/loginUser.js';
import loggedInCheck, { signOutUser } from '../middleware/loggedinCheck.js';

const router = express.Router();

router.get('/', (req, res) => getUser(req, res));

router.get('/data', loggedInCheck, (req, res) => {
    res.status(200).json(req.user);
});


router.post('/register', async (req, res) => registerUser(req, res));


router.post('/login', (req, res) => loginUser(req, res));


router.delete('/', (req, res) => signOutUser(res));




export default router;