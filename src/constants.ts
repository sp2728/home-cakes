import Carousel from './sections/carousel/carousel';
import Introduction from './sections/introduction/introduction';

import PersonImage from './assets/images/person.png';
import CarouselOne from './assets/images/carousel-one.png';
import CarouselTwo from './assets/images/carousel-two.png';
import Categories from './sections/categories/categories';
import Reviews from './sections/reviews/reviews';

import poundCakeImg from './assets/images/pound_cake.png';
import layeredCakeImg from './assets/images/layered_cake.jpg';
import cupcakesImg from './assets/images/cupcakes.jpg'

export type Components = {
    [key: string]: any;
  };
  
export const sectionMap: Components = {
    "introduction": Introduction,
    "carousel": Carousel,
    "categories": Categories,
    "reviews": Reviews
}

export const cakeTypes: any = {
  "pound_cake": poundCakeImg,
  "layered_cake":layeredCakeImg,
  "cupcakes": cupcakesImg,
}



export const Images: any = {
  "person": PersonImage,
  "carousel":{
    "carousel-one": CarouselOne,
    "carousel-two": CarouselTwo 
  }

}