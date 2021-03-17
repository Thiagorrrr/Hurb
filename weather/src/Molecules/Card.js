import React, { useContext } from 'react';
import { ThemeContext } from '../Molecules/ThemeContext'

function Card( {cityName, list}) {
    const { theme, ChangeMeters, whitchUnit } = useContext(ThemeContext);
    const listProps = {
        temp: list[0]?.main?.temp,
        temp1: list[1]?.main?.temp,
        temp2: list[2]?.main?.temp,
        description: list[0]?.weather[0]?.description,
        speed: list[0]?.wind?.speed,
        humidity: list[0]?.main?.humidity,
        pressure: list[0]?.main?.pressure,
    }
    return (
        <div className={`card card--${theme}`}>
            <div className="card__wrapper">
                <div className="card__city-info">
                    <span className="card__city-icon"> </span> {cityName}
                </div>
                <div className="card__content-info">
                    <div className="card__icon"></div>
                    <div className="card__text-box">
                        <div className="card__today">
                            <span className="card__today-info">Hoje </span>
                            <span className="card__today-info">{Math.ceil(listProps.temp)} 
                                <span className={`card__meters card__meters--${whitchUnit}`} onClick={() => ChangeMeters()}> 
                                <span className="card__celsius"> °C</span> | <span className="card__fahrenheit" >°F</span> 
                            </span>
                            </span>
                        </div>
                        <div className="card__status-box">
                            <span className="card__status-info">{listProps.description} </span>
                            <span className="card__status-air">vento:<span> {listProps.speed} km/h</span> </span>
                            <span className="card__status-air">Humidade:<span> {listProps.humidity}%</span> </span>
                            <span className="card__status-air">Pressão: <span> {listProps.pressure}hPA</span> </span>
                        </div>
                    </div>
                </div>
                <div className="card__box card__box--tomorrow">
                    <div className="card__box-wrapper">
                        <span className="card__box-info">Amanhã </span>
                        <span className="card__box-info">{Math.ceil(listProps.temp1)}° 
                            <span className={`card__meters card__meters--${whitchUnit}`} onClick={() => ChangeMeters()}> 
                                <span className="card__celsius"> °C</span> | <span className="card__fahrenheit" >°F</span> 
                            </span>
                        </span>
                    </div>
                </div>
                <div className="card__box card__box--after">
                    <div className="card__box-wrapper">
                        <span className="card__box-info">Depois de amanhã </span>
                        <span className="card__box-info">{Math.ceil(listProps.temp2)}° 
                        <span className={`card__meters card__meters--${whitchUnit}`} onClick={() => ChangeMeters()}> 
                            <span className="card__celsius"> °C</span> | <span className="card__fahrenheit" >°F</span> 
                            </span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;
