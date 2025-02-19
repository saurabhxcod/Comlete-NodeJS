import { User } from '../Models/User.js'
import bcrypt from 'bcryptjs'
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (name == "" || email == "" || password == "") {
        return res.json({ message: "All fields are required" })
    }
    let user = await User.findOne({ email })
    if (user) return res.json({ message: "User already exits", success: false })

    //using bcryptjs to hash the password before saving it to database.
    const hashPassword = await bcrypt.hash(password, 10)

    //save to database
    user = await User.create({ name, email, password: hashPassword })
    res.json({ message: "User Created Succesfully..", success: true, user })
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (email == "" || password == "")
        return res.json({ message: "All fields are required!!" })
    const user = await User.findOne({email})
    if (!user) return res.json({ message: "User not found", success: false })
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.json({ message: "Invalid Password!!", success: false })
    res.json({ message: `Welcome ${user.name}`, success: true })
}