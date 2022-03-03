import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    address: { type: String, require: true },
    password: { type: String, require: true },
    id: { type: String }
})


const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;