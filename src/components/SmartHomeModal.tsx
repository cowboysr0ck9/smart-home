import React, { useState } from "react";
import { IS_FRENCH } from "../constants";

// Component Images
const ConnectIcon =
  "https://cdn.adiglobaldistribution.us/userfile-na/US/userfiles/smart-home-2/overlay-wifi.svg";
const ConserveIcon =
  "https://cdn.adiglobaldistribution.us/userfile-na/US/userfiles/smart-home-2/overlay-conserve.svg";
const ProtectIcon =
  "https://cdn.adiglobaldistribution.us/userfile-na/US/userfiles/smart-home-2/overlay-shield.svg";
const ModalCloseIcon =
  "https://cdn.adiglobaldistribution.us/userfile-na/US/userfiles/smart-home-2/overlay-close.svg";

// Core Component
export const SmartHomeModal = ({
  handleModalOnClose,
  isVisible,
  handleOnTranstionEnd,
  isMobile,
}: ISmartHomeModalProps) => {
  const [isInternalModalOpen, setIsInternalModalOpen] =
    useState<Boolean>(false);

  return isInternalModalOpen ? (
    <></>
  ) : (
    <div
      onTransitionEnd={(e: React.TransitionEvent) => {
        setIsInternalModalOpen(true);
        handleOnTranstionEnd();
      }}
      className={`smart-home_overlay-container ${
        isVisible ? "fadeIn" : "fadeOut"
      }
        `}
    >
      <div className="smart-home_modal">
        <img
          onClick={handleModalOnClose}
          className="smart-home_modal-close-btn"
          src={ModalCloseIcon}
          alt="close modal"
        ></img>
        <p className="smart-home_main-title">
          {IS_FRENCH
            ? "Exemples ultimes de demeures connectées."
            : "Explore the Ultimate Connected Home."}
        </p>
        <p className="smart-home_sub-title">
          {IS_FRENCH
            ? "Devenez le conseiller numéro 1 de votre client pour tout ce qui a trait à la domotique"
            : "Become your customers No. 1 advisor on all things smart home"}
        </p>

        <div className="smart-home_bullet-holder">
          <div className="smart-home_bullet">
            <img src={ConnectIcon} alt="Smart Home Connect" />
            <h5 className="smart-home_bullet-title">
              {" "}
              {IS_FRENCH ? "Connexion" : "Connect"}
            </h5>
            {!isMobile && (
              <p className="smart-home_bullet-copy">
                {IS_FRENCH
                  ? "Appareils parfaitement intégrés permettant les communications entre des produits de domotique"
                  : "Devices seamlessly integrate to enable communication between smart home products"}
              </p>
            )}
          </div>

          <div className="smart-home_bullet">
            <img src={ConserveIcon} alt="Smart Home Conserve" />
            <h5 className="smart-home_bullet-title">
              {" "}
              {IS_FRENCH ? "Économie" : "Conserve"}
            </h5>
            {!isMobile && (
              <p className="smart-home_bullet-copy">
                {IS_FRENCH
                  ? "Les configurations automatiques améliorent l'efficacité et permettent d'économiser du temps, de l'argent et des ressources"
                  : "Automatic settings improve efficiency and save time, money and resources"}
              </p>
            )}
          </div>
          <div className="smart-home_bullet">
            <img src={ProtectIcon} alt="Smart Home Protect" />
            <h5 className="smart-home_bullet-title">
              {" "}
              {IS_FRENCH ? "Protection" : "Protect"}
            </h5>
            {!isMobile && (
              <p className="smart-home_bullet-copy">
                {IS_FRENCH
                  ? "Les clients ont le plein contrôle de la sécurité de leur demeure et bénéficient d'une réelle tranquillité d'esprit"
                  : "Customers have total control over the security of their home for true peace of mind"}
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleModalOnClose}
          className="smart-home_cta-btn"
        >
          {IS_FRENCH ? "Démarrer" : "Get Started"}
        </button>
      </div>
    </div>
  );
};

interface ISmartHomeModalProps {
  handleModalOnClose: () => void;
  handleOnTranstionEnd: () => void;
  isVisible: boolean;
  isMobile: boolean;
}
