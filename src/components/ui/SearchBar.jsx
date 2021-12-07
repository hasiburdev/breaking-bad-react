import React, { useState } from "react";

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (value) => {
    setText(value);
    getQuery(value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          className="form-control"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchBar;
