import React from "react";

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
          Click on the blue circles to get product details.
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
