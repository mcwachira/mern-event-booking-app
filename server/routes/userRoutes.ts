import express from 'express'
import bcryptjs from 'bcryptjs'
import User from '../models/userModel.ts'
const router = express.Router();


//registration end point

router.post('/register', async(req, res) => {
    try{
        const {name, email, password} = req.body
        console.log(password)
        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).json({message:"User already exist here"})
        }
        

        const user =  await User.create({
            name,
            email,
            password
        })

        return res.status(200).json({message:"Register successfully"})

    }catch(error){
        return res.status(500).json({message:error.message})
    }
})

export default router