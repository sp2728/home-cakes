import Carousel from 'react-bootstrap/Carousel';
import { Images } from '../../constants';

import './carousel.css';

interface CarouselItem {
    description: string;
    src: string;
    title: string;
    link?: string;
}

interface CarouselSlide {
    items: CarouselItem[]
}

const CarouselSlide = ({ items }: CarouselSlide) => {

    return (
        <div id='reviews' className='carousel-container'>
            <h2> Reviews </h2>
            <Carousel className='carousel'>
                {items.map((item: CarouselItem, index) =>
                    <Carousel.Item className='carousel-item' key={index}>
                        <div className='carousel-item-container'>
                            {/* <img
                                className="carousel-image"
                                src={Images.carousel[item.src]}
                                alt={item.title}
                            />
                            <div className='carousel-content'>
                                This is the revoew texyt. And cannot be changesd as per the necc era
                                This is the revoew texyt. And cannot be changesd as per the necc era

                            </div> */}
                        </div>

                        {/* <Carousel.Caption className="carousel-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {item?.link && <a href={item.link}> Check Here </a>}
                        </Carousel.Caption> */}
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}

export default CarouselSlide