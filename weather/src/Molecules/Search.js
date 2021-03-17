import React, { useState, useContext, useRef } from 'react';
import { ThemeContext } from './ThemeContext'
import debounce from "lodash.debounce";
import SearchIcon from "../svg/SearchIcon";

function Search() {
  const [inputCity, setInputCity] = useState("");
  const sendValue = (value) => setInputCity(value);
  const [inputValue, setInputValue] = useState("");

  // debounce input
  const delayedValue = useRef(debounce(value => sendValue(value), 300)).current;
  const onChange = e => {
    setInputValue(e.target.value);
    delayedValue(e.target.value);
  };
  const { ChangeCity } = useContext(ThemeContext);

  const SetEnterSearch = (e) => {
    setTimeout(()=>{
      if (e.key === 'Enter') {
        ChangeCity(inputCity)
      }
    }, 500)
    
  }
  return (
    <div className="search">
      <label className="search__label">
        <input className="search__input" type="text" placeholder="Nome da cidade" onChange={onChange} value={inputValue} onKeyPress={event => SetEnterSearch(event)} required />
        <button className="search__btn"
          onClick={() => ChangeCity(inputCity)}
        >
          <SearchIcon />
        </button>
      </label>
    </div>
  )
}

export default Search;
