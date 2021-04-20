import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results mt-4">
        <h2>
          {props.results.word}
        </h2>
        <Phonetics phonetics={props.results.phonetics} />
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
