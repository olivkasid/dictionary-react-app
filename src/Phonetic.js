import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio !== "" && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
