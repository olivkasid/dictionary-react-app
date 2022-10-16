import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function HandlePexelsResponse(response) {
    setPhotos(response.data.photos)
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001b5c653509e1e43f4ad97c2a7864edbbc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(HandlePexelsResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              placeholder="Enter a word"
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordChange}
              className="search"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <div className="hint">
            Suggested words: sunset, wine, forest, fall...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
