import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PRODUCT_CARDS, PULSE_DOTS } from '../data';
import { ProductCard } from './ProductCard';
import { Pulser } from './Pulser';

export const MobileCarousel = () => {
    const [card, setCard]: any = useState({
        spotlightLeftZone: false,
        tvSpeakerZone: false,
        tvDeviceZone: false,
        tvThermostatZone: false,
        bedroomLightZone: false,
        bedroomTableZone: false,
        spotlightRightZone: false,
        outsideMotionSensorLeft: false,
        kitchenTvZone: false,
        doorKeypadZone: false,
        doorLockZone: false,
        garageWaterTankZone: false,
        garageScreenZone: false,
        outsideMotionSensorRight: false,
    });

    const toggle = (id: string) => {
        const clonedCardState = Object.assign({}, card);
        for (let c in clonedCardState) {
            c === id ? (card[c] = card[c]) : (card[c] = false);
        }
        setCard({ ...card, ...clonedCardState });
        setCard({ ...card, [id]: !card[id] });
    };

    return (
        <Carousel
            // autoPlay={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            onChange={() => console.log('Set All Cards to be removed')}
            className="mobileHomeMap"
        >
            <div className="adi-mobile-image adi-tv-room">
                {/* TV Room Pulsers & Cards */}
                <ul className="adi--card-list">
                    {PRODUCT_CARDS.map((c) => {
                        const {
                            id,
                            arrowDirection,
                            productImage,
                            productImageAltText,
                            productMetaLink,
                            copy,
                            productMetaLinkText,
                            productMetaName,
                            shopMoreBtn,
                            shopMoreBtnLink,
                            title,
                        } = c;
                        return (
                            <li id={`${id}Card`} key={id} className="p-abs">
                                <ProductCard
                                    isOpen={card[id]}
                                    arrowDirection={arrowDirection}
                                    productImage={productImage}
                                    productImageAltText={productImageAltText}
                                    productMetaLink={productMetaLink}
                                    onClose={() => toggle(id)}
                                    copy={copy}
                                    productMetaLinkText={productMetaLinkText}
                                    productMetaName={productMetaName}
                                    shopMoreBtn={shopMoreBtn}
                                    shopMoreBtnLink={shopMoreBtnLink}
                                    title={title}
                                ></ProductCard>
                            </li>
                        );
                    })}

                    {PULSE_DOTS.map((x) => {
                        return (
                            <li
                                className="pulser"
                                key={x}
                                id={x}
                                onClick={() => toggle(x)}
                            >
                                <Pulser />
                            </li>
                        );
                    })}
                </ul>
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
