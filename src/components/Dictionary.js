import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [language, setLanguage] = useState("en_US");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function pexelsHandleResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation:  https://dictionaryapi.dev/
    let endPoint = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
    axios.get(endPoint).then(handleResponse);

    // documentation: https://www.pexels.com/api/documentation/?#photos-overview
    let pexelsApiKey = `563492ad6f9170000100000195e3babaf5504ae1b45e47fcc6683072`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(pexelsHandleResponse);
  }

  function submitHandler(event) {
    event.preventDefault();
    search();
  }

  function updateLanguage(event) {
    setLanguage(event.target.value);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={submitHandler}>
          <select className="form-select" onChange={updateLanguage}>
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
            value={keyword}
          />
          <input
            type="submit"
            className="Dictionary-submit-btn"
            value="Search"
          />
        </form>
        <Results results={results} />
        <Photos photos={photos} alt={keyword} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
