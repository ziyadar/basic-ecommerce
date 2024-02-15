import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import { BsFillTruckFrontFill } from "react-icons/bs"; 
import './Services.css'


const Services = () => {
  return (
    <div>
        <h1>Our Services</h1>
        <div className="Services-container">
        <div>
            <BsFillTruckFrontFill size={30} />
            <h3>Free Delivery upto 5000 Rs</h3>
        </div>
        <div>
            <AiOutlinePhone size={30} />
            <h3>24/7 Contact Services</h3>
        </div>
        <div>
            <AiOutlineMail size={30} />
            <h3>24/7 Online Services</h3>
        </div>
        </div>
    </div>
  )
}

export default Services