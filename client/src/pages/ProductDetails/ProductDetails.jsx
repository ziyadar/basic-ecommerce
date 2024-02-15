import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './ProductDetails.css'

const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  
  const getSingleproduct = async() =>{
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/single/${id}`)
      setProduct (response.data.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() =>{
    getSingleproduct()
  }, [])




  
  return (
    <div>
      <h1>Product Details</h1>
      <div className='productdetails-container'>
        <div>
          <img src={product.img} alt="product-img" />
        </div>
        <div>
          <h1>{product.productName}</h1>
          <h2>{product.price}</h2>
          <button>add to cart</button>
        </div>
       
      </div>
    </div>
  )
}

export default ProductDetails