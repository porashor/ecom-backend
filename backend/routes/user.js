import express from 'express';
import loggedinCheck from '../middleware/loggedinCheck.js';
import updateUsers from '../libs/updateUsers.js';
import photoupload from '../middleware/photoupload.js';

const router = express.Router();


//order history, wishlist, cart, payment etc

router.post('/update', loggedinCheck, photoupload, async (req, res) => updateUsers(req, res));


router.get('/profile', loggedinCheck, async (req, res) => {
    res.json({ user: req.user });
});

export default router;