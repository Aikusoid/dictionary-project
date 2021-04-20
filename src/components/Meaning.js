import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p className="definition">
              <strong className="definition">Definition:</strong>
              {definition.definition}</p>
            <em className="example">"{definition.example}"</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
