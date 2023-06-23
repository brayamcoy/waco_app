import express from 'express';
import { signin, signup } from '../controllers/auth';
const router = express.Router();

// auth routes

router.post('/signin', signin);
router.post('/signup', signup);

export default router;