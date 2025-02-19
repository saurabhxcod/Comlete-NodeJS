import express from 'express';
import { register ,login} from '../Controllers/User.js';

const router=express.Router();

//user Register
//@api name:-user register
//@api method:-post
//@api endpoint-: /api/user/register
router.post('/register',register);

//user login
//@api name:-user login
//@api method:-post
//@api endpoint-: /api/user/login
router.post('/login',login)

export default router;