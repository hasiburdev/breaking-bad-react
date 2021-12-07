import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import SearchBar from "./components/ui/SearchBar";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const data = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const result = await data.json();
      setItems(result);
      setIsLoading(false);
      console.log(result);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <SearchBar getQuery={(value) => setQuery(value)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
