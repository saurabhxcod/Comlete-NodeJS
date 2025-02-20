import { Contact } from "../Models/Contact.js";

//get all contact 
export const getallContact=async(req,res)=>{
    const userContact=await Contact.find();
    if(!userContact) return res.json({message:"No Contact Found",success:false})
    res.json({message:"All contact fetched !!",userContact,success:true})
}

//create new contact
export const newContact=async(req,res)=>{
    const {name,email,phone,type}=req.body;
    if(name=="" || email==""|| phone==""||type=="")
        return res.json({message:"All fields are required",success:false})
    let saveContact=await Contact.create({
        name,
        email,
        phone,
        type,
    })
    res.json({message:"Contact Saved Successfully",saveContact,success:true})

};

//update contact by id
export const update=async(req,res)=>{
    const id=req.params.id;
    const {name,email,phone,type}=req.body;

    let updatedContact=await Contact.findByIdAndUpdate(id,{
        name,
        email,
        phone,
        type,
    },{new:true})

    if(!updatedContact) res.json({message:"Contact Not Found",success:false}) 
    res.json({message:"Contact Updated Successfully",updatedContact,success:true})

}

//get Contact by id
export const getContactById=async(req,res)=>{
    const id=req.params.id
    const userContact=await Contact.findById(id)
    if(!userContact) res.json({message:"No contact found",success:false})
    res.json({message:"Contact Fetched",userContact,success:true})
}

//delete Contact by ID
export const deleteById=async(req,res)=>{
    const id=req.params.id;
    let deletedContact=await Contact.findByIdAndDelete(id)
    if(!deletedContact) res.json({message:"No Such Contact Found",success:false}) 
    res.json({message:"Contact Deleted Successfully",deletedContact,success:true})
}



