import express from 'express'
import bcryptjs from 'bcryptjs'
import User from '../models/userModel.ts'
import jwt from 'jsonwebtoken'
const router = express.Router();


//User registration end point

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


// User login end point

router.post('/login', async(req, res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message:"User does not exist"})
        }


        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user?.password);
        if(!validPassword){
            return res.status(400).json({message:"Password is wrong.Check password and reenter it again."})
        }


        //create and assign token
        const token = jwt.sign({_id:user.id}, process.env.JWT_TOKEN)

        return res.status(200).json({token, message:"login successful"})
    }catch(error){
        return res.status(500).json({message:error.message})
    }
})

export default router