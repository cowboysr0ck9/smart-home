import React from 'react';

export const Pulser = () => {
    const PULSER_COLOR = '#0673f1';
    return (
        <>
            <svg
                className="pulse-svg"
                width="8px"
                height="8px"
                viewBox="0 0 108 108"
                version="1.1"
            >
                <circle
                    className="circle first-circle"
                    fill={PULSER_COLOR}
                    stroke={PULSER_COLOR}
                    strokeWidth="3"
                    cx="54"
                    cy="54"
                    r="54"
                ></circle>
                <circle
                    className="circle second-circle"
                    fill={PULSER_COLOR}
                    cx="54"
                    cy="54"
                    r="54"
                ></circle>
                <circle
                    className="circle third-circle"
                    fill={PULSER_COLOR}
                    cx="54"
                    cy="54"
                    r="54"
                ></circle>
                <circle
                    className="circle"
                    fill={PULSER_COLOR}
                    cx="54"
                    cy="54"
                    r="54"
                ></circle>
            </svg>
        </>
    );
};
