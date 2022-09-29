import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function HandleKeywordChange(event) {
        setKeyword(event.target.value)
    }
  function Search(event) {
    event.preventDefault();
    alert(keyword);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" autoFocus={true} placeholder="Enter a word" onChange={HandleKeywordChange}/>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
