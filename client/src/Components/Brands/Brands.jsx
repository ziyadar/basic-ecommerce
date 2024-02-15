import Marquee from 'react-fast-marquee'
import './Brand.css'


const fakeBrandData = [
    {
        id:1,
        image: '/images/Brand-02.jpg'
    },
    {
        id:2,
        image: '/images/Brand-03.jpg'
    },
    {
        id:3,
        image: '/images/Brand-04.jpg'
    },
    {
        id:4,
        image: '/images/Brand-05.jpg'
    },
    {
        id:5,
        image: '/images/Brand-06.jpg'
    },
    {
        id:6,
        image: '/images/Brand-07.jpg'
    }
    
]

const Brands = () => {
  return (
    <div>
        <Marquee>
            {fakeBrandData.map((Brand)=>{
                return(
                    <img src={Brand.image} key={Brand.id} className="marquee-image" alt="Brand-image" />
                )

            })}

        </Marquee>
    </div>
  )
}

export default Brands