const user=require('../models/user')
const bcryptjs = require('bcryptjs')

//bcryptjs - used for hashing password

const Login=async(req,res)=>{
    const body=req.body
console.log(body)

    const findUser=await user.findOne({email:body.email})
    // comapring the hashpassword with raw password which user is sending in body.password
    const comparePassword = await bcryptjs.compare(body.password, findUser.password)
    if(!comparePassword){
        return res.status(401).json({errorMessage: 'Invalid Password'})
    }
    res.send({message:'success',data:{
        email: findUser.email
    }})
}

const Register=async(req,res)=>{
    // data which we getting from user in req.body
    const body=req.body
    // hashing the password
    const hashpassword = await bcryptjs.hash(body.password, 10)

    const saveData=await user.create({
        username: body.username,
        email:body.email,
        // saving the hashed  password
        password: hashpassword
    })   //save in mongo database
    res.send({message:'Success',data:saveData})  //sending back the user data to react

}

module.exports={
    Login,
    Register
}