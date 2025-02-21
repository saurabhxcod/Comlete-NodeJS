import express from 'express'
import { newContact ,getallContact, getContactById, update, deleteById, getContactByUserId } from '../Controllers/Contact.js';

const router=express.Router();
import {isAuthenticated} from '../Middleware/Auth.js'

//newContact
//@api name:-creating contact
//@api method:-post
//@api endpoint-: /api/contact/new
router.post('/new',isAuthenticated,newContact)

//getallcontact
router.get('/',getallContact)

//get contact by id
router.get('/:id',getContactById)

//update contact by id
router.put('/:id',isAuthenticated,update)

//delete contact by id
router.delete('/:id',isAuthenticated,deleteById)

//get user specific contact by id
router.get("/userid/:id",getContactByUserId)

export default router;