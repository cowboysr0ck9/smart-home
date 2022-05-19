import React from "react";
import { IS_FRENCH } from "../constants";

export const SecondaryModal = ({
  handleModalOnClose,
  isVisible,
  isMobile,
}: ISecondaryModalProps) => {
  return !isVisible ? (
    <></>
  ) : (
    <div className="secondary-modal-container">
      <div className="adi-hero-card--dark">
        <p className="adi-secondary-modal-text">
          {IS_FRENCH
            ? "Cliquez sur les cercles bleus pour les détails du produit."
            : "Click on the blue circles to get product details."}
        </p>
        <button
          onClick={handleModalOnClose}
          className="adi-secondary-modal-button"
        >
          OK
        </button>
      </div>
    </div>
  );
};

interface ISecondaryModalProps {
  handleModalOnClose: () => void;
  isVisible: boolean;
  isMobile: boolean;
}
