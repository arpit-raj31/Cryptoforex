import express from 'express';
import { createDemoAccount, createLiveAccount, demodeposit, demowithdraw, deposit, getDemoAccount, getLiveAccount, updateBalance, updateDemoBalance, withdraw } from './../../controllers/accountController.js';
import { authenticateToken, authorizeRole } from '../../middleware/auth/auth.js';

const router = express.Router();

//Live Account

router.post('/create', authenticateToken, authorizeRole('user'), createLiveAccount);

router.get('/:userId', authenticateToken, authorizeRole('user'), getLiveAccount);

router.put('/:userId/balance', authenticateToken, authorizeRole('user'), updateBalance);

router.put('/:userId/withdraw', authenticateToken, withdraw);

router.put('/:userId/deposit', authenticateToken, deposit);


// Demo Account 

router.post('/createdemo', authenticateToken, authorizeRole('user'), createDemoAccount);

router.get('/demo/:userId', authenticateToken, authorizeRole('user'), getDemoAccount);

router.put('/demo/:userId/balance', authenticateToken, authorizeRole('user'), updateDemoBalance);

router.put('/demo/:userId/withdraw', authenticateToken, demowithdraw);

router.put('/demo/:userId/deposit', authenticateToken, demodeposit);


export default router;