import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {
  return (
    <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop showIndicators={false} showStatus={false}>
        <div className="banner-container">
            <img src="/images/levis.jpeg" alt="levis" />
        </div>
        <div className="banner-container">
            <img src="/images/lee cooper.jpeg" alt="lee cooper" />
        </div>
    </Carousel>
  )
}

export default Banner