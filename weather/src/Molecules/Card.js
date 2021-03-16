import React, { useContext } from 'react';
import { ThemeContext } from '../Molecules/ThemeContext'

function Card() {
    const theme = useContext(ThemeContext);

    return (
        <div className={`card card--${theme}`}>
            <div className="card__wrapper">
                <div className="card__content-info">
                    <div className="card__icon"></div>
                    <div className="card__text-box">
                        <div className="card__today">
                            <span className="card__today-info">Hoje </span>
                            <span className="card__today-info">32 <span>C</span>
                            </span>
                        </div>
                        <div className="card__status-box">
                            <span className="card__status-info">Ensolarado </span>
                            <span className="card__status-air">vento:<span> 6.4km</span> </span>
                            <span className="card__status-air">Humidade:<span> 78%</span> </span>
                            <span className="card__status-air">Pressão: <span> 1003hpa</span> </span>
                        </div>
                    </div>
                </div>
                <div className="card__box card__box--tomorrow">
                    <div className="card__box-wrapper">
                        <span className="card__box-info">Amanhã </span>
                        <span className="card__box-info">25 <span>C</span></span>
                    </div>
                </div>
                <div className="card__box card__box--after">
                    <div className="card__box-wrapper">
                        <span className="card__box-info">Depois de amanhã </span>
                        <span className="card__box-info">22 <span>C</span></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;
