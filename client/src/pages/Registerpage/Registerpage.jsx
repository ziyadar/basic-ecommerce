
import { useState } from 'react'
import axios from 'axios'
import './Registerpage.css'

export default function Registerpage() {
  const [username, setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const RegisterUser =async(e)=>{
        e.preventDefault()

        const response= await axios.post('http://localhost:3000/api/v1/user/register',{
            email:email,
            password:password,
            username: username
        })
        console.log(response)
    }
    
  return (
    <div className='container'>
        <form className='form'>
            <h3>REGISTER</h3>
            <br />
            <input type="text" placeholder='enter your Username' onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="email">Email Address</label>
            <input type="text" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn' onClick={RegisterUser} type='submit'>Register</button>
        </form>
    </div>
  )
}


