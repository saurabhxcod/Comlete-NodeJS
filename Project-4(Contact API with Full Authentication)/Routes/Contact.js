import express from 'express'
import { newContact ,getallContact, getContactById, update, deleteById } from '../Controllers/Contact.js';

const router=express.Router();

//newContact
//@api name:-creating contact
//@api method:-post
//@api endpoint-: /api/contact/new
router.post('/new',newContact)

//getallcontact
router.get('/',getallContact)

//get contact by id
router.get('/:id',getContactById)

//update contact by id
router.put('/:id',update)

//delete contact by id
router.delete('/:id',deleteById)

export default router;