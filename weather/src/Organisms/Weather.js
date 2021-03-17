import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../Molecules/ThemeContext';
import Card from '../Molecules/Card';

function Weather() {
    const [dataWeather, setDataWeather] = useState([]);
    const [theme, setTheme] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [units, setUnits] = useState('metric');
    const [whitchUnit, setwhitchUnit] = useState('');
    const [hasError, setHasError] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
     const KEY = 'c63386b4f77e46de817bdf94f552cddf';
    //const KEY = '62f9f45570254385ae294f19d37ba5b7';
    const APPID = '7ba73e0eb8efe773ed08bfd0627f07b8';


    useEffect(() => {
        // Get Geo Cordenates API
        const GetGeoCordenates = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(PositionCoords);
            }
        }

        const PositionCoords = ((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        GetGeoCordenates();

        if (latitude !== '' && longitude !== '') {
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${KEY}&pretty=1`;

            fetch(url)
                .then(response => response.json())
                .then(data => setCity(data?.results[0]?.components?.city))
                .catch(err => setHasError(true))
        }

    }, [latitude, longitude])


    useEffect(() => {
        // Get Collect Weather Info API
        const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=3&lang=pt_br&appid=${APPID}`;
        console.log(urlWeather, 'url final');

        if (city !== '' && units !== '') {
            const CollectWeatherInfo = () => {
                fetch(urlWeather)
                    .then(res => res.json())
                    .then(dataWeather => { 
                        setDataWeather(dataWeather)
                        setTemp(dataWeather.list[0].main.temp)
                    })
                    .catch(err => console.log(err))
            }
            CollectWeatherInfo();
        }

    }, [city, units])

    useEffect(()=>{
        // format for more legibility, set theme main
        if (temp === '') {
            setTheme(ThemeContext._currentValue)
        } else {
            if ( temp <= 15 ) {
                setTheme(themes.cold);
            }else if (temp >=35) {
                setTheme(themes.sunny);
            }else {
                setTheme(themes.normal);
            }
        }
        
        
    }, [temp])

    // change city parameters api
    const ChangeCity = (value)=>  {
        setCity(value);
    }

    // change units parameters api
    const ChangeMeters = (value)=> {
        setUnits(value);
        units === 'metric' ? setwhitchUnit('C') : setwhitchUnit('F');
    }
    
    

    return (
        <ThemeContext.Provider value={{theme, ChangeCity, ChangeMeters, whitchUnit}}>
            <div className='weather'>
                <div className="weather__wrapper">
                    {
                        !hasError?
                            <Card 
                                cityName={dataWeather?.city?.name}
                                list={dataWeather?.list || ''}
                            />
                            :
                            <div>
                                <div>segundo</div>
                            </div>
                    }
                    
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Weather;
