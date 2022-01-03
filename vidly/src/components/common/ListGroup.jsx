import React from "react";

const ListGroup = ({ genres, onGenreChange, currentGenre }) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre.id}
          onClick={() => onGenreChange(genre)}
          className={
            currentGenre === genre
              ? "clickable list-group-item active"
              : "clickable list-group-item"
          }
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
