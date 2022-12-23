import { model, Schema } from "mongoose";
import { UserType } from "../../types/types";


const userSchema = new Schema<UserType>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    },
    timestamps:true
});

export const UserModel = model('user', userSchema);