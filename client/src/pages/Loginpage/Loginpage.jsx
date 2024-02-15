import { useState } from 'react'
import axios from 'axios'
import './Loginpage.css'


export default function Loginpage() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

    const LoginUser  =async(e)=>{
        e.preventDefault()

        const response=await axios.post('http://localhost:3000/api/v1/user/login',{
            email:email,
            password:password
        })
        console.log(response.data.data)
         localStorage.setItem('userlogged',JSON.stringify(response.data.data))
    }

  return (
    <div className='container'>
        <form className='form'>
            <h3>LOGIN</h3>
            <br />
            <label htmlFor="email">Email Address</label>
            <input type="text" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} />
            <button className='btn' onClick={LoginUser} type='submit'>Login</button>
        </form>
    </div>
  )
}


