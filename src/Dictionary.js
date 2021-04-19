import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function submitHandler(event) {
    event.preventDefault();

    // documentation:  https://dictionaryapi.dev/

    const endPoint = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(endPoint).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={submitHandler}>
        <input
          type="search"
          className="Dictionary-search-input"
          onChange={updateKeyword}
        />
        <input type="submit" className="Dictionary-submit-btn" value="Search" />
      </form>
    </div>
  );
}
