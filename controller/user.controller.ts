import userModel from "../model/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response):Promise<Response> => {
    try {
        const { fullname, email, password, stack, isAdmin } = req.body;
        
        // To secure password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const user = await userModel.create({
            fullname, 
            email, 
            password: hashPassword, 
            stack, 
            isAdmin
        })

        if (!user) {
            console.log("please, input required field")
        }

        return res.status(200).json({
            message: "successful",
            data: user
        })


    } catch (error) {
        return res.status(400).json({
            message: "error"
        })
    }
}

export const login = async (req:Request, res: Response):Promise<Response> => {
    try {
        const {email, password} = req.body;
        const users = await userModel.findOne({email});

        if (!email) return res.status(400).json({
            message: "enter a valid email"
        })

        if (!users) res.status(401).json({
            message: "user not found"
        })

        const checkPassword = await bcrypt.compare(password, users!.password)

        if (!checkPassword) return res.status(401).json({
            message: "user not found"
        })

        return res.status(200).json({
            messsage: `welcome`,
            data: users
        })

    } catch (error) {
        return res.status(400).json({
            message: "error",
            data: error
        })
    }
}

export const getAllUsers = async (req: Request, res: Response):Promise<Response> => {
    try {
        const getUsers = await userModel.find();

        return res.status(200).json({
            message: "successful",
            data: getUsers
        }) 
    } catch (error) {
        return res.status(400).json({
            message: "error",
            data: error
        })
    }
}