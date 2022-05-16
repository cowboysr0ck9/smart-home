import React from "react";
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
  gaTag,
  gaTagSku,
}: IProductCardProps) => {
  return (
    <span className={`${isOpen ? "" : "js-card-display"}`}>
      <div className={`adi-hero-card`}>
        {arrowDirection && (
          <span className={`card-arrow--${arrowDirection}`}></span>
        )}
        <span className="adi-hero-card-inner">
          <div className="adi-hero-card--btn-close" onClick={onClose}>
            <img
              src={
                "https://cdn.adiglobaldistribution.us/userfile-na/US/userfiles/smart-home-2/times-circle-regular.svg"
              }
              alt={"Close Button"}
            />
          </div>
          <div className="adi-hero-card--img-holder">
            <img
              src={productImage}
              className="adi-hero-card--img"
              alt={productImageAltText}
            />
          </div>

          {productMetaName && productMetaLink && productMetaLinkText && (
            <div className="adi-hero-card--product-meta">
              <h6 className="adi-hero-card--product-meta-name">
                {productMetaName}
              </h6>
              <a
                className="adi-hero-card--product-meta-link"
                href={productMetaLink}
                target="_blank"
                data-ga-promo={gaTagSku}
                rel="noopener noreferrer"
              >
                {productMetaLinkText}
              </a>
            </div>
          )}

          <div className="adi-hero-card--product-copy">
            <h4 className="adi-hero-card--product-copy-title">{title}</h4>
            <p className="adi-hero-card--product-copy-text">{copy}</p>
          </div>
        </span>

        <div className="adi-hero-card--shop-more">
          <a
            href={shopMoreBtnLink}
            target="_blank"
            data-ga-promo={gaTag}
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
  productMetaName: string | null;
  productMetaLink: string | null;
  productMetaLinkText: string | null;
  title: string;
  copy: string;
  shopMoreBtnLink: string;
  shopMoreBtn: string;
  onClose: any;
  isOpen: boolean;
  gaTag: string;
  gaTagSku: string | null;
}

export enum ArrowDirection {
  RIGHT = "right",
  LEFT = "left",
}
