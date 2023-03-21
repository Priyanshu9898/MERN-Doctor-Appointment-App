import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validator: validator.isEmail,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength : [6, "Password Must Be Atleast 6 characters"],
        validator: validator.isAlphanumeric,
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken : String,
    resetPasswordExpire: String,

});

export const User =  mongoose.model("User", userSchema);