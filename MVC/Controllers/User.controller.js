import {User} from '../Models/User.model.js'
export const userRegister=async (req, res) => {
    // console.log(req.body)

    try {
        let user = await User.create(req.body)
        res.json({
            message: "User created successfully.",
            NewUser: user,
            success: true, 
        })
    } catch (error) {
        res.json({message:error.message})
    }
};