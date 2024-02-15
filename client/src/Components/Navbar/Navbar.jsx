import { BiCart } from "react-icons/bi"; 
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ecommerce</h1>
      <div className="navbar-links">
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <BiCart />

      </div>

    </nav>
  
  )
}

export default Navbar

