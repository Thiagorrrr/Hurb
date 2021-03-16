import React, { useState, useRef} from 'react';
import debounce from "lodash.debounce";

const sendQuery = (query) => console.log(`Querying for ${query}`);

function Input({cityName}) {
    const [userQuery, setUserQuery] = useState("");
    const delayedQuery = useRef(debounce(q => sendQuery(q), 500)).current;
    const onChange = e => {
      setUserQuery(e.target.value);
      delayedQuery(e.target.value);
    };

  return (
    <>  
        <div className="input__city-info">
            <span className="input__city-icon"> </span> {cityName}
            <input type="text" placeholder="Nome da cidade" onChange={onChange}  value={userQuery}/>      
        </div>    
    </>
  )
}

export default Input;
