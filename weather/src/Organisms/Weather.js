import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../Molecules/ThemeContext';
import Card from '../Molecules/Card';
import CardShimmer from '../Molecules/CardShimmer';
import Search from '../Molecules/Search';

function Weather() {
    const [dataWeather, setDataWeather] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [units, setUnits] = useState('metric');
    const [whitchUnit, setwhitchUnit] = useState('celsius');
    const [hasErrorWeather, setHasErrorWeather] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    //const KEY = 'c63386b4f77e46de817bdf94f552cddf';
    const KEY = '62f9f45570254385ae294f19d37ba5b7';
    const APPID = '7ba73e0eb8efe773ed08bfd0627f07b8';

    useEffect(() => {
        // Get Geo Cordenates API
        const GetGeoCordenates = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(PositionCoords, GetErroFallBackHttp, { timeout: 1000 });
            }
        }

        const PositionCoords = ((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        const GetErroFallBackHttp = () => {
            // Get latitude, longitude when error getCurrentPosition set on http
            setCity('rio de janeiro');
        }

        GetGeoCordenates();

        if (latitude !== '' && longitude !== '') {
            setLoading(true);
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${KEY}&pretty=1`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setCity(data?.results[0]?.components?.city);
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                    console.log(err, 'error');
                })
        }

    }, [latitude, longitude, setLoading])


    useEffect(() => {
        // Get Collect Weather Info API
        const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=3&lang=pt_br&appid=${APPID}`;
        console.log(urlWeather, 'url final');

        if (city !== '' && units !== '') {
            setLoading(true);
            const CollectWeatherInfo = () => {
                fetch(urlWeather)
                    .then(res => res.json())
                    .then(dataWeather => {
                        setDataWeather(dataWeather)
                        setDataList(dataWeather?.list || '')
                        setTemp(dataWeather.list[0].main.temp)
                        setLoading(false)
                        setHasErrorWeather(false)
                    })
                    .catch(err => {
                        setHasErrorWeather(true)
                        setCity('cidade não encontrada!')
                        setLoading(false)
                        console.log(err, 'error')
                    })
            }
            CollectWeatherInfo();
        }

    }, [city, units, setLoading])

    useEffect(() => {
        // format for more legibility, set theme main
        var parametersUnits = {
            celsius: {
                cold: 15,
                sunny: 35
            },
            fahrenheit: {
                cold: 59,
                sunny: 95
            }
        };

        if (hasErrorWeather || temp === '') {
            setTheme(ThemeContext._currentValue)
        } else {
            if (temp <= parametersUnits[whitchUnit].cold) {
                setTheme(themes.cold);
            } else if (temp >= parametersUnits[whitchUnit].sunny) {
                setTheme(themes.sunny);
            } else {
                setTheme(themes.normal);
            }
        }

    }, [temp, whitchUnit, hasErrorWeather])

    // change city parameters api
    const ChangeCity = (value, status) => {
        if (status !== false){
            setCity(value)
        }
    }

    // change units parameters api
    const ChangeMeters = () => {
        if (units === 'metric') {
            setUnits('imperial');
            setwhitchUnit('fahrenheit');
        } else {
            setUnits('metric');
            setwhitchUnit('celsius')
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, city, dataList, ChangeCity, ChangeMeters, whitchUnit }}>
            <div className='weather'>
                <div className="weather__wrapper">
                    <>
                        <Search />
                        {
                            !loading ?
                                <Card/>
                                : <CardShimmer />
                        }
                    </>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Weather;
