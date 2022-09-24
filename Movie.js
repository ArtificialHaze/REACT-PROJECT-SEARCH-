import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
        alt={movie.title}
      />
    </motion.div>
  );
};

export default Movie;
