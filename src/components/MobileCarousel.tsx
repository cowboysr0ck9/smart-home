import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PRODUCT_CARDS, ADI_ROOM_FILTER } from '../data';
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

    const hideAllCards = () => {
        const clonedCardState = Object.assign({}, card);
        for (let c in clonedCardState) {
            card[c] = false;
        }
        setCard({ ...card, ...clonedCardState });
    };

    return (
        <Carousel
            // autoPlay={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            onChange={hideAllCards}
            className="mobileHomeMap"
        >
            <div className="adi-mobile-image adi-smart-livingroom-bg">
                {/* TV Room Pulsers & Cards */}
                {populateSlider(ADI_ROOM_FILTER.TVROOM, card, toggle, [
                    'tvSpeakerZone',
                    'tvDeviceZone',
                    'tvThermostatZone',
                ])}
            </div>
            <div className="adi-mobile-image adi-smart-bedroom-bg">
                {/* Bedroom Pulsers & Cards */}
                {populateSlider(ADI_ROOM_FILTER.BEDROOM, card, toggle, [
                    'bedroomLightZone',
                    'bedroomTableZone',
                ])}
            </div>
            <div className="adi-mobile-image adi-smart-kitchen-bg">
                {/* Kitchen Pulsers & Cards */}
                {populateSlider(ADI_ROOM_FILTER.KITCHEN, card, toggle, [
                    'kitchenTvZone',
                ])}
            </div>
            <div className="adi-mobile-image adi-smart-door-bg">
                {/* Doors Pulsers & Cards */}
                {populateSlider(ADI_ROOM_FILTER.DOOR, card, toggle, [
                    'doorKeypadZone',
                    'doorLockZone',
                ])}
            </div>
            <div className="adi-mobile-image adi-smart-garage-bg">
                {/* Garage Pulsers & Cards */}
                {populateSlider(ADI_ROOM_FILTER.GARAGE, card, toggle, [
                    'garageWaterTankZone',
                    'garageScreenZone',
                ])}
            </div>

            <div className="adi-mobile-image adi-smart-outdoor-bg">
                {/* Spotlight & Motion Sensors*/}
                {populateSlider(ADI_ROOM_FILTER.OUTDOOR, card, toggle, [
                    'outsideMotionSensorLeft',
                ])}
            </div>

            <div className="adi-mobile-image adi-smart-roof-bg">
                {/* Spotlight & Motion Sensors*/}
                {populateSlider(ADI_ROOM_FILTER.ROOF, card, toggle, [
                    'spotlightLeftZone',
                ])}
            </div>
        </Carousel>
    );
};

const populateSlider = (
    filterKey: ADI_ROOM_FILTER,
    cardState: any,
    onClose: Function,
    pulserIds: string[]
) => {
    return (
        <ul className="p-rel adi--card-list">
            {PRODUCT_CARDS.filter((c) => c.roomForMobileCard === filterKey).map(
                (c) => {
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
                                isOpen={cardState[id]}
                                arrowDirection={arrowDirection}
                                productImage={productImage}
                                productImageAltText={productImageAltText}
                                productMetaLink={productMetaLink}
                                onClose={() => onClose(id)}
                                copy={copy}
                                productMetaLinkText={productMetaLinkText}
                                productMetaName={productMetaName}
                                shopMoreBtn={shopMoreBtn}
                                shopMoreBtnLink={shopMoreBtnLink}
                                title={title}
                            ></ProductCard>
                        </li>
                    );
                }
            )}

            {[...pulserIds].map((x) => {
                return (
                    <li
                        className="pulser"
                        key={x}
                        id={x}
                        onClick={() => onClose(x)}
                    >
                        <Pulser />
                    </li>
                );
            })}
        </ul>
    );
};
