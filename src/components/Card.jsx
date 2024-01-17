import React, { useState } from 'react';

const Card = () => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className={`card w-max flex mx-auto cursor-default ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="card-front relative h-64 w-[460px] mx-auto card-bg rounded-3xl grid place-items-center">
                <span className="material-symbols-outlined absolute top-4 left-4 text-white">
                    lightbulb
                </span>
                <span className="material-symbols-outlined absolute top-4 right-4 text-white">
                    volume_up
                </span>
                <div className="card-text font-montserrat font-bold text-white text-2xl drop-shadow-md">9 + 6 + 7x + - 2x - 3</div>
            </div>

            <div className="card-back relative h-64 w-[460px] mx-auto card-bg rounded-3xl grid place-items-center">
                <span className="material-symbols-outlined absolute top-4 left-4 text-white">
                    lightbulb
                </span>
                <span className="material-symbols-outlined absolute top-4 right-4 text-white">
                    volume_up
                </span>
                <div className="card-text font-montserrat font-bold text-white text-2xl drop-shadow-md">5x + 12</div>
            </div>
        </div>
    );
};
export default Card