import React, { useContext } from 'react';
import { ThemeContext } from '../Molecules/ThemeContext'
import Input from '../Molecules/Input';

function Card( {cityName, list}) {
    const theme = useContext(ThemeContext);

    return (
        <div className={`card card--${theme}`}>
            <div className="card__wrapper">
                <Input
                
                cityName={cityName}
                
                />
                <div className="card__content-info">
                    <div className="card__icon"></div>
                    <div className="card__text-box">
                        <div className="card__today">
                            <span className="card__today-info">Hoje </span>
                            <span className="card__today-info">{Math.ceil(list[0]?.main?.temp)}° <span>C</span>
                            </span>
                        </div>
                        <div className="card__status-box">
                            <span className="card__status-info">{list[0]?.weather[0]?.description} </span>
                            <span className="card__status-air">vento:<span> {list[0]?.wind?.speed} km/h</span> </span>
                            <span className="card__status-air">Humidade:<span> {list[0]?.main?.humidity}%</span> </span>
                            <span className="card__status-air">Pressão: <span> {list[0]?.main?.pressure}hPA</span> </span>
                        </div>
                    </div>
                </div>
                <div className="card__box card__box--tomorrow">
                    <div className="card__box-wrapper">
                        <span className="card__box-info">Amanhã </span>
                        <span className="card__box-info">{Math.ceil(list[1]?.main?.temp)}° <span>C</span></span>
                    </div>
                </div>
                <div className="card__box card__box--after">
                    <div className="card__box-wrapper">
                        <span className="card__box-info">Depois de amanhã </span>
                        <span className="card__box-info">{Math.ceil(list[2]?.main?.temp)}° <span>C</span></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;
