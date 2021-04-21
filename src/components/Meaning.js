import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div className="definition" key={index}>
            <p>
              {definition.definition}
            </p>
            <em className="example">"{definition.example}"</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </section>
  );
}
