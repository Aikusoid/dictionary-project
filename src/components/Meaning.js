import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            <em className="example">"{definition.example}"</em>
            {/* {definition.synonyms.map((synonym, i) => {
                return <p key={i}>{synonym}</p>;
              })} */}
          </div>
        );
      })}
    </div>
  );
}
