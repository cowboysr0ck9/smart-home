import React, { useState, useEffect, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { PRODUCT_CARDS } from '../data';
import { ProductCard } from './ProductCard';
import { Pulser } from './Pulser';
import debounce from 'lodash/debounce';

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
            /* eslint-disable no-self-assign */
            c === id ? (card[c] = card[c]) : (card[c] = false);
        }
        setCard({ ...card, ...clonedCardState });
        setCard({ ...card, [id]: !card[id] });
    };

    const hideAllCards = useCallback(() => {
        const clonedCardState = { ...card };
        for (let c in clonedCardState) {
            card[c] = false;
        }
        setCard({ ...clonedCardState });
    }, [card]);

    // Hides All Cards On Window Resize
    useEffect(() => {
        const onResize = debounce(hideAllCards, 300);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [hideAllCards]);

    return (
        <>
            <ul className="p-rel adi--card-list">
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
                        gaTag,
                        roomForMobileCard,
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
                                gaTag=""
                            ></ProductCard>
                        </li>
                    );
                })}
            </ul>
            <Carousel
                // autoPlay={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                swipeable={true}
                onChange={hideAllCards}
                className="mobileHomeMap"
            >
                <div className="adi-mobile-image adi-smart-livingroom-bg">
                    {/* TV Room Pulsers & Cards */}
                    {populateSlider(toggle, [
                        'tvSpeakerZone',
                        'tvDeviceZone',
                        'tvThermostatZone',
                    ])}
                </div>
                <div className="adi-mobile-image adi-smart-bedroom-bg">
                    {/* Bedroom Pulsers & Cards */}
                    {populateSlider(toggle, [
                        'bedroomLightZone',
                        'bedroomTableZone',
                    ])}
                </div>
                <div className="adi-mobile-image adi-smart-kitchen-bg">
                    {/* Kitchen Pulsers & Cards */}
                    {populateSlider(toggle, ['kitchenTvZone'])}
                </div>
                <div className="adi-mobile-image adi-smart-door-bg">
                    {/* Doors Pulsers & Cards */}
                    {populateSlider(toggle, ['doorKeypadZone', 'doorLockZone'])}
                </div>
                <div className="adi-mobile-image adi-smart-garage-bg">
                    {/* Garage Pulsers & Cards */}
                    {populateSlider(toggle, [
                        'garageWaterTankZone',
                        'garageScreenZone',
                    ])}
                </div>

                <div className="adi-mobile-image adi-smart-outdoor-bg">
                    {/* Spotlight & Motion Sensors*/}
                    {populateSlider(toggle, ['outsideMotionSensorLeft'])}
                </div>

                <div className="adi-mobile-image adi-smart-roof-bg">
                    {/* Spotlight & Motion Sensors*/}
                    {populateSlider(toggle, ['spotlightLeftZone'])}
                </div>
            </Carousel>
        </>
    );
};

const populateSlider = (onClose: Function, pulserIds: string[]) => {
    return (
        <ul className="p-rel adi--card-list">
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
