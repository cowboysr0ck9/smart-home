import React from 'react';
import CloseIcon from '../assets/images/times-circle-regular.svg';
export const ProductCard = ({
    arrowDirection,
    productImage,
    productImageAltText,
    productMetaName,
    productMetaLink,
    productMetaLinkText,
    title,
    copy,
    shopMoreBtnLink,
    shopMoreBtn,
    onClose,
    isOpen,
}: IProductCardProps) => {
    return (
        <span className={`${isOpen ? '' : 'js-card-display'}`}>
            <div className={`adi-hero-card`}>
                {arrowDirection && (
                    <span className={`card-arrow--${arrowDirection}`}></span>
                )}

                <div className="adi-hero-card--btn-close" onClick={onClose}>
                    <img
                        src={
                            'https://cdn.qa.adiglobaldistribution.us/userfile-na/ReactJS/static/media/times-circle-regular.7da18975.svg'
                        }
                        alt={'Close Button'}
                    />
                </div>
                <div className="adi-hero-card--img-holder">
                    <img
                        src={productImage}
                        className="adi-hero-card--img"
                        alt={productImageAltText}
                    />
                </div>

                <div className="adi-hero-card--product-meta">
                    <h6 className="adi-hero-card--product-meta-name">
                        {productMetaName}
                    </h6>
                    <a
                        className="adi-hero-card--product-meta-link"
                        href={productMetaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {productMetaLinkText}
                    </a>
                </div>
                <div className="adi-hero-card--product-copy">
                    <h4 className="adi-hero-card--product-copy-title">
                        {title}
                    </h4>
                    <p className="adi-hero-card--product-copy-text">{copy}</p>
                </div>
                <div className="adi-hero-card--shop-more">
                    <a
                        href={shopMoreBtnLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="adi-hero-card--shop-more-link"
                    >
                        {shopMoreBtn}
                    </a>
                </div>
            </div>
        </span>
    );
};

interface IProductCardProps {
    arrowDirection?: ArrowDirection;
    productImage: string;
    productImageAltText: string;
    productMetaName: string;
    productMetaLink: string;
    productMetaLinkText: string;
    title: string;
    copy: string;
    shopMoreBtnLink: string;
    shopMoreBtn: string;
    onClose: any;
    isOpen: boolean;
}

export enum ArrowDirection {
    RIGHT = 'right',
    LEFT = 'left',
}
