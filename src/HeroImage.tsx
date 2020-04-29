import React, { useState } from 'react';
import './assets/scss/main.scss';
import { Pulser } from './components/Pulser';
import { ProductCard } from './components/ProductCard';
import { PRODUCT_CARDS, PULSE_DOTS } from './data';

function HeroImage() {
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
        <div id="homeMap">
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
    );
}

export default HeroImage;
