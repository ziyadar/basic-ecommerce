
import Footer from '../../Components/Footer/Footer'
import Brands from '../../Components/Brands/Brands'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import MostFeatures from '../../Components/MostFeatured/MostFeatures'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Services from '../../Components/Services/Services'

const Homepage = () => {
  return (
   <>
   <Navbar />
   <Banner />
   <Services />
   <MostFeatures />
   <PopularProducts />
   <Brands />
   <Footer />
   </>
  )
}

export default Homepage