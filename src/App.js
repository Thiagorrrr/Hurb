import React, { useState, useEffect } from 'react';
import Weather from './Organisms/Weather'

import './Styles/Scss/App.scss'

function App() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const host = 'https://www.bing.com/'; 
  const divStyle = {
    backgroundImage:`url('${host}${data.url})`,
  };

  useEffect(() => {
    const url = `${host}HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setData( data.images[0] ))
      .catch(err => setHasError(true))
  }, [])
  
  return (
    <>
      { hasError !== true && data.url ?
        <main className="main" style={divStyle}> 
          <Weather/>
        </main> : null
      }
    </>
  )
}

export default App;
