import React, { useState } from "react";

function Dictionary() {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const [searchWord, setSearchWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const output=dictionary.find((item)=>item.word.toLowerCase()===searchWord.toLowerCase());

    if (output) {
      setDefinition(output.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <h3>Definition:</h3> <p>{definition}</p>
      </div>
    </div>
  );
}

export default Dictionary;
