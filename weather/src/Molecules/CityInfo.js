import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../Molecules/ThemeContext'

function CityInfo() {
    const { city } = useContext(ThemeContext);

    return (
        <div className="cityInfo">
            <div className="cityInfo__wrapper">
                <span className="cityInfo__icon"> </span> {city}
            </div>
        </div>
    )
}

CityInfo.propTypes = {
    ThemeContext: PropTypes.shape({
        city: PropTypes.string,
    })
}
export default CityInfo;
