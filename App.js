import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

const TMDB_API = "";
const TMDB_API_KEY = "";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(`${TMDB_API + TMDB_API_KEY}`);
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
