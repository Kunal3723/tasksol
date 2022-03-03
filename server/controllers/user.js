import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";


export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) { return res.status(404).json({ message: "User does not exist" }) }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) { return res.status(400).json({ message: "Invalid credentials" }) }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1hr" });

        res.status(200).send({ token });
       



    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, password, email,phone,address } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) { return res.status(404).json({ message: "User already exist" }) }

        
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`,phone,address });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1hr" });
        
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}