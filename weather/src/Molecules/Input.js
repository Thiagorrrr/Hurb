import React, { useState, useContext, useRef } from 'react';
import { ThemeContext } from '../Molecules/ThemeContext'
import debounce from "lodash.debounce";

function Input({ cityName }) {
  const [inputCity, setInputCity] = useState("");
  const sendValue = (value) => setInputCity(value);
  const [inputValue, setInputValue] = useState("");

  // debounce input
  const delayedValue = useRef(debounce(value => sendValue(value), 500)).current;
  const onChange = e => {
    setInputValue(e.target.value);
    delayedValue(e.target.value);
  };
  const { ChangeCity } = useContext(ThemeContext);

  return (
    <div className="input__city-info">
      <span className="input__city-icon"> </span> {cityName}
      <input type="text" placeholder="Nome da cidade" onChange={onChange} value={inputValue} />
      <button
        onClick={() => ChangeCity(inputCity)}>
        Enviar
        </button>
    </div>
  )
}

export default Input;
