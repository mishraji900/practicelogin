const {hashPassword,comparePassword}=require('../helpers/auth')
const jwt =require('jsonwebtoken');
const User = require('../models/User')
const test =(req,res)=>{
    res.json('test is working')
}
const registerUser=async (req,res)=>{
     try {
        const {name,email,password}=req.body;
        //checks
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error:'email is already there'
            })
        };
        if(!email){
            return res.json({
                error:'email is required'
            })
        };
        if(!password||password.length<8){
            return res.json({
                error:'password is required and should be atleast 8 characters'
            })
        }
        const hashedPassword=await hashPassword(password)
        const user = await User.create({
            name,email,password:hashedPassword,
        })

        return res.json(user)

     } catch (error) {
        console.log(error)
     }
}
const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const user =await User.findOne({email});
        if(!user){
            return res.json({
                error:'no email'
            })
        }
        const match = await comparePassword(password,user.password)
        if(match){
            jwt.sign({
                email:user.email,
                id:user._id,
                name:user.name
            },process.env.JWT_Secret,{},(err,token)=>{
                if(err){
                throw err;}
                res.cookie('token',token).json(user)
            })
        }
        if(!match){
            res.json({
                error:'password donot match'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile=(req,res)=>{
    const {token} = req.cookies 
    if (token) {
        jwt.verify(token,process.env.JWT_Secret,{},(err,user)=>{
            if (err) {
                throw err;
            }
            res.json(user)
        })
    }else{
        res.json(null)
    }
}
module.exports={
    test,
    registerUser,
    loginUser,
    getProfile
}