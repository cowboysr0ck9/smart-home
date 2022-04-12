import React, { useState, useEffect } from 'react';
import './assets/scss/main.scss';
import { Pulser } from './components/Pulser';
import { ProductCard } from './components/ProductCard';
import { PRODUCT_CARDS, PULSE_DOTS } from './data';
import { MobileCarousel } from './components/MobileCarousel';
import debounce from 'lodash/debounce';
import { SmartHomeModal } from './components/SmartHomeModal';
import { SecondaryModal } from './components/SecondaryModal';

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

    const [isModalOpen, setIsModalOpen]: any = useState<Boolean>(true);

    const [heroCardDisplay]: any = useState(true);

    const toggle = (id: string) => {
        const clonedCardState = Object.assign({}, card);
        for (let c in clonedCardState) {
            /* eslint-disable no-self-assign */
            c === id ? (card[c] = card[c]) : (card[c] = false);
        }
        setCard({ ...card, ...clonedCardState });
        setCard({ ...card, [id]: !card[id] });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const hideAllCards = () => {
        const clonedCardState = { ...card };
        for (let c in clonedCardState) {
            card[c] = false;
        }
        setCard({ ...clonedCardState });
    };

    // Hides All Cards On Window Resize
    useEffect(() => {
        const onResize = debounce(hideAllCards, 300);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [hideAllCards]);

    useEffect(() => {
        const timer = setInterval(function () {
            setIsModalOpen(false);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div id="homeMap">
                <SmartHomeModal
                    isVisible={isModalOpen}
                    handleModalOnClose={() => setIsModalOpen(false)}
                />

                <SecondaryModal />

                <div
                    className={`adi-hero-lead--copy-holder ${
                        heroCardDisplay ? '' : 'js-d-none'
                    }`}
                ></div>
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
