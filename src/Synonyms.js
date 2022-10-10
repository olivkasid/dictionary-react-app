import React, { useState } from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return <ul className="Synonyms">
      {props.synonyms.map(function(synonym, index) {
      return <li key={index}>{synonym}</li>
    })
  }
    </ul>
  } else {
    return null;
  }
}
