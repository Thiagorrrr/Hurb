import React, { useContext } from 'react';
import { ThemeContext } from '../Molecules/ThemeContext'
import BoxTemp from './BoxTemp';

function Card() {
    const { dataList, theme, city, ChangeMeters, whitchUnit } = useContext(ThemeContext);

    const listProps = {
        temp: dataList[0]?.main?.temp,
        temp1: dataList[1]?.main?.temp,
        temp2: dataList[2]?.main?.temp,
        description: dataList[0]?.weather[0]?.description,
        speed: dataList[0]?.wind?.speed,
        humidity: dataList[0]?.main?.humidity,
        pressure: dataList[0]?.main?.pressure,
    }
    return (
        <div className={`card card--${theme}`}>
            <div className="card__wrapper">
                <div className="card__city-info">
                    <div className="card__city-wrapper">
                        <span className="card__city-icon"> </span> {city}
                    </div>
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
                            <span className="card__status-air">Vento:<span> {listProps.speed} km/h</span> </span>
                            <span className="card__status-air">Humidade:<span> {listProps.humidity}%</span> </span>
                            <span className="card__status-air">Pressão: <span> {listProps.pressure}hPA</span> </span>
                        </div>
                    </div>
                </div>
                <BoxTemp
                    setClass='tomorrow'
                    status="amanhã"
                    temp={listProps.temp1}
                />
                <BoxTemp
                    setClass='after'
                    status="depois de amanhã"
                    temp={listProps.temp2}
                />
            </div>

        </div>
    )
}

export default Card;
