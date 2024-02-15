
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Loginpage from './pages/Loginpage/Loginpage'
import Registerpage from './pages/Registerpage/Registerpage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cartpage from './pages/Cartpage/Cartpage'

const App = () => {
  return (
    <Routes>
      {/* single route */}
      <Route path="/" element={<Homepage />} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cartpage />} />
      {/* page not found route should always add last */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
 
  )
}

export default App



