import React from 'react';
import ReactDOM from 'react-dom';
import HeroImage from './HeroImage';

if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
        value: function assign(target: any, varArgs: any) {
            if (target === null || target === undefined) {
                throw new TypeError(
                    'Cannot convert undefined or null to object'
                );
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (
                            Object.prototype.hasOwnProperty.call(
                                nextSource,
                                nextKey
                            )
                        ) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true,
    });
}

ReactDOM.render(
    <React.StrictMode>
        <HeroImage />
    </React.StrictMode>,
    document.getElementById('adi-hero-holder')
);
