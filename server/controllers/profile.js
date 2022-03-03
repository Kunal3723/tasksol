import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";


export const getInfo = async (req, res) => {

    try {
        if (!(req.userId)) {
              
            return res.status(404).json({ message: "Unauthorized access" })
        }

        const user = await UserModel.findById(req.userId);

        if (!user) {
            
            return res.status(404).json({ message: "User does not exist" })
            
        }

        const { name, email, address, phone } = user;
        const firstName = name.split(" ")[0];
        const lastName = name.split(" ")[1];

        res.status(210).send({ firstName, lastName, address, phone, email });




    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
