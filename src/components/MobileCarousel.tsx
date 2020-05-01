import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const MobileCarousel = () => {
    return (
        <Carousel showThumbs={false} className="mobileHomeMap">
            <div>
                <img src="assets/1.jpeg" alt="image 1" />
            </div>
            <div>
                <img src="assets/2.jpeg" alt="image 2" />
            </div>
            <div>
                <img src="assets/3.jpeg" alt="image 3" />
            </div>
        </Carousel>
    );
};
