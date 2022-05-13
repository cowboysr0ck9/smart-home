import React, { useState } from 'react';

// Component Images
import ConnectIcon from '../assets/images/smart-home/overlay-wifi.svg';
import ConserveIcon from '../assets/images/smart-home/overlay-conserve.svg';
import ProtectIcon from '../assets/images/smart-home/overlay-shield.svg';
import ModalCloseIcon from '../assets/images/smart-home/overlay-close.svg';

// Core Component
export const SmartHomeModal = ({
    handleModalOnClose,
    isVisible,
    handleOnTranstionEnd,
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
                isVisible ? 'fadeIn' : 'fadeOut'
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
                    Explore the Ultimate Connected Home.
                </p>
                <p className="smart-home_sub-title">
                    Become your customers No. 1 advisor on all things smart home
                </p>

                <div className="smart-home_bullet-holder">
                    <div className="smart-home_bullet">
                        <img src={ConnectIcon} alt="Smart Home Connect" />
                        <h5 className="smart-home_bullet-title">Connect</h5>
                        <p className="smart-home_bullet-copy">
                            Devices seamlessly integrate to enable communication
                            between smart home products
                        </p>
                    </div>

                    <div className="smart-home_bullet">
                        <img src={ConserveIcon} alt="Smart Home Conserve" />
                        <h5 className="smart-home_bullet-title">Conserve</h5>
                        <p className="smart-home_bullet-copy">
                            Devices seamlessly integrate to enable communication
                            between smart home products
                        </p>
                    </div>
                    <div className="smart-home_bullet">
                        <img src={ProtectIcon} alt="Smart Home Protect" />
                        <h5 className="smart-home_bullet-title">Protect</h5>
                        <p className="smart-home_bullet-copy">
                            Devices seamlessly integrate to enable communication
                            between smart home products
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleModalOnClose}
                    className="smart-home_cta-btn"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

interface ISmartHomeModalProps {
    handleModalOnClose: () => void;
    handleOnTranstionEnd: () => void;
    isVisible: boolean;
}
