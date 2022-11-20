import Carousel from './sections/carousel/carousel';
import Introduction from './sections/introduction/introduction';

import PersonImage from './assets/images/person.png';
import CarouselOne from './assets/images/carousel-one.png';
import CarouselTwo from './assets/images/carousel-two.png';
import Categories from './sections/categories/categories';

export type Components = {
    [key: string]: any;
  };
  
export const sectionMap: Components = {
    "introduction": Introduction,
    "carousel": Carousel,
    "categories": Categories
}

export const Images: any = {
  "person": PersonImage,
  "carousel":{
    "carousel-one": CarouselOne,
    "carousel-two": CarouselTwo 
  }

}