
import { User } from "../models/UserSchema.js";

export const registerController = async (req, res, next) =>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(404).send({
            success: false,
            message: "All the fields are required",
        })
    }
    
    const checkUser = await User.findOne({email: email});

    if(checkUser){
        return res.status(404).send({
            success: false,
            message: "User already exists",
        })
    }

    let user = await User.create({
        name: name,
        email: email,
        password: password
    });

    return res.status(200).send({
        success: true,
        message: "User created Successfully",
        user
    });

}



export const loginController = async (req, res, next) =>{
    const {email, password} = req.body;

    if( !email || !password){
        return res.status(404).send({
            success: false,
            message: "All the fields are required",
        })
    }
    
    const user = await User.findOne({email: email});

    if(!user){
        return res.status(404).send({
            success: false,
            message: "Incorrect Email or Password",
        })
    }

    return res.status(200).send({
        success: true,
        message: `Logged in Successfully, Welcome back, ${user.name}`,
    });

}