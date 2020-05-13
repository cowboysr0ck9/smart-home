import React, { useState, useEffect } from 'react';
import './assets/scss/main.scss';
import { Pulser } from './components/Pulser';
import { ProductCard } from './components/ProductCard';
import { PRODUCT_CARDS, PULSE_DOTS } from './data';
import { MobileCarousel } from './components/MobileCarousel';

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

    const [heroCardDisplay, setHeroCardDisplay]: any = useState(true);

    const toggle = (id: string) => {
        const clonedCardState = Object.assign({}, card);
        for (let c in clonedCardState) {
            /* eslint-disable no-self-assign */
            c === id ? (card[c] = card[c]) : (card[c] = false);
        }
        setCard({ ...card, ...clonedCardState });
        setCard({ ...card, [id]: !card[id] });
    };

    // Hides Cards After 3 Seconds
    useEffect(() => {
        const timer = setInterval(function () {
            setHeroCardDisplay(false);
        }, 5500);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div id="homeMap">
                <div
                    className={`adi-hero-lead--copy-holder ${
                        heroCardDisplay ? '' : 'js-d-none'
                    }`}
                >
                    <h2 className="adi-hero-lead--copy-title">
                        Design the Ultimate<br></br>Connected Home.
                    </h2>
                    <p className="adi-hero-lead--copy-tagline">
                        Become your customers’ No. 1 advisor on all things smart
                        home
                    </p>
                    <p className="adi-hero-lead--copy-text">
                        Explore how you can add smart home devices to your
                        installs and customize set up to give your customers the
                        technology they need for a unique, personalized and
                        secure home experience
                    </p>
                </div>

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
            <MobileCarousel />
        </>
    );
}

export default HeroImage;
