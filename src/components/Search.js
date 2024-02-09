import React, {useState} from "react";

function Search({onSearch}) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(text); //by doing this I am inherently setting the "setSearch" value to the searched text, which is why I don't do the e.target.value on the top level to set it. I think, anyways.
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onSubmit={handleSubmit} type="submit">🔍</button>
    </form>
  );
}

export default Search;
