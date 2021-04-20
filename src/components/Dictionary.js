import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [language, setLanguage] = useState("en_US");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function submitHandler(event) {
    event.preventDefault();

    // documentation:  https://dictionaryapi.dev/

    const endPoint = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
    axios.get(endPoint).then(handleResponse);
  }

  function updateLanguage(event) {
    setLanguage(event.target.value);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={submitHandler}>
        <select className="form-select" onChange={updateLanguage}>
          <option defaultValue>Choose the language</option>
          <option value="en_US">English (US)</option>
          <option value="en_GB">English (UK)</option>
          <option value="ru">Русский</option>
          <option value="de">Deutsche</option>
          <option value="it">Italiano</option>
          <option value="fr">French</option>
          <option value="es">Español</option>
        </select>
        <input
          type="search"
          className="Dictionary-search-input"
          onChange={updateKeyword}
        />
        <input type="submit" className="Dictionary-submit-btn" value="Search" />
      </form>
      <Results results={results} />
    </div>
  );
}
