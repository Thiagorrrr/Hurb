import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../Molecules/ThemeContext';
import Card from '../Molecules/Card';

function Weather() {
    // const [data, setData] = useState([]);
    // const [dataWeather, setDataWeather] = useState([]);
    const [theme, setTheme] = useState('');
    // const [city, setCity] = useState('');
    // const [units, setUnits] = useState('metric');
    // const [hasError, setHasError] = useState(false);
    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');
    // const [noLocation, setNoLocation] = useState(false);
    // // const KEY = 'c63386b4f77e46de817bdf94f552cddf';
    // const KEY = '62f9f45570254385ae294f19d37ba5b7';
    // const APPID = '7ba73e0eb8efe773ed08bfd0627f07b8';


    // useEffect(() => {

    //     const GetGeoCordenates = () => {
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(PositionCoords);
    //         }
    //     }

    //     const PositionCoords = ((position) => {
    //         setLatitude(position.coords.latitude);
    //         setLongitude(position.coords.longitude);
    //     })

    //     GetGeoCordenates();

    //     if (latitude !== '' && longitude !== '') {
    //         const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${KEY}&pretty=1`;

    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setData(data)
    //                 setCity(data?.results[0]?.components?.city)
    //             })
    //             .catch(err => setHasError(true))
    //     } else {
    //         setNoLocation(true);
    //     }

    // }, [latitude, longitude])


    // useEffect(() => {
    //     const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=3&appid=${APPID}`;
    //     console.log(urlWeather, 'url final');

    //     if (city !== '' && units !== '') {
    //         const CollectWeatherInfo = () => {
    //             fetch(urlWeather)
    //                 .then(res => res.json())
    //                 .then(dataWeather => setDataWeather(dataWeather))
    //                 .catch(err => console.log(err))
    //         }
    //         CollectWeatherInfo();
    //     } else {
    //         setNoLocation(true);
    //     }

    // }, [city, units])

    useEffect(()=>{
        // default 
        setTheme(ThemeContext._currentValue);
    }, [])

    return (
        <ThemeContext.Provider value={theme}>
            <div className='weather'>
                <div className="weather__wrapper">
                    {/* {
                        !hasError && data?.results && !noLocation ?
                            <div> {data.results[0].components.city}</div>

                            :
                            <div>

                            </div>
                    } */}
                    <Card/>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Weather;
