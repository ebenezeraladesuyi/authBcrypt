import mongoose, { Document, Schema, model } from "mongoose";

interface userData {
    fullname: string;
    email: string;
    password: string;
    stack: string;
    isAdmin: boolean;
}

interface dataSchema extends userData, mongoose.Document {}

const userSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "enter your name"]
    },
    email: {
        type: String,
        required: [true, "enter your email"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "enter your password"],
        minlength: 5,
    },
    stack: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
})

const userModel = mongoose.model<dataSchema>("user", userSchema)

export default userModel 