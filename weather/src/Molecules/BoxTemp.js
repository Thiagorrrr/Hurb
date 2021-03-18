import React, { useContext } from 'react';
import { ThemeContext } from '../Molecules/ThemeContext'

function BoxTemp({temp, setClass, status}) {
    const { ChangeMeters, whitchUnit } = useContext(ThemeContext);
    return (
     
    <div className={`boxTemp boxTemp--${setClass}`}>
        <div className="boxTemp__wrapper">
            <span className="boxTemp__box-info">{status} </span>
            <span className="boxTemp__box-info">{Math.ceil(temp)}°
                <span className={`boxTemp__meters boxTemp__meters--${whitchUnit}`} onClick={() => ChangeMeters()}>
                    <span className="boxTemp__celsius"> °C</span> | <span className="boxTemp__fahrenheit" >°F</span>
                </span>
            </span>
        </div>
    </div>
    )
}

export default BoxTemp;
