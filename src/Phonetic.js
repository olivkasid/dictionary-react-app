import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic.audio);
  if (props.phonetic.audio !== "" && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
