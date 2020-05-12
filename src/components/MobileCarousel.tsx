import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const MobileCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            onChange={() => console.log('Set All Cards to be removed')}
            className="mobileHomeMap"
        >
            <div className="adi-mobile-image adi-tv-room">
                {/* TV Room Pulsers & Cards */}
            </div>
            <div className="adi-mobile-image">
                {/* Bedroom Pulsers & Cards */}
            </div>
            <div className="adi-mobile-image">
                {/* Kitchen Pulsers & Cards */}
            </div>
            <div className="adi-mobile-image">
                {/* Doors Pulsers & Cards */}
            </div>
            <div className="adi-mobile-image">
                {/* Garage Pulsers & Cards */}
            </div>
        </Carousel>
    );
};
