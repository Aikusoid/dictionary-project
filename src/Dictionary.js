import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function submitHandler(event) {
    event.preventDefault();
    alert(`Searching for the definition of "${keyword}"`);
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
