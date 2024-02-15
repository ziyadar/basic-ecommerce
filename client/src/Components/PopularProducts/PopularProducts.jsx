import React, {useState,useEffect} from 'react'
import ProductCard from "../ProductCard/ProductCard"
import './PopularProducts.css'
import axios from 'axios'


const PopularProducts = () => {
  const [products, setProducts] = useState([])


  const getallproducts = async()=>{
    try {
      const response = await axios.get('http://localhost:3000/api/v1/all')
      console.log(response.data.data)
      setProducts(response.data.data)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    getallproducts()
  },[])


  return (
    <div>
    <h1>Popular Products</h1>
    <div className="popular">
      {products.map((product) => {
        return(
          <ProductCard productid={product._id} name={product.productName} img={product.img} price={product.price} key={product.id} />
        )
      })}
      
    </div>
    </div>
  )
}

export default PopularProducts