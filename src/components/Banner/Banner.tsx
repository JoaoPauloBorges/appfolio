import React from 'react';

import './Banner.css';

const Banner: React.FC = () => {

    return (
        <section className="banner">
            <div className="outdoor">
                <div className="jar" />
                <div>
                    <p>Grap a juice and take a look <span role="img" aria-label="juice box">🍋</span></p>
                </div>
            </div>

            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
        </section>
    );
}

export default Banner;