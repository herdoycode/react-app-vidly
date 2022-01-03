import React from "react";
import { Link } from "react-router-dom";
import Like from "./common/Like";
import Table from "./common/Table";

const MoviesTable = ({ movies, onLike, onDelete, onSort, sortColumn }) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie.id}`}> {movie.title} </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "inStock", label: "Stock" },
    { path: "rate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like like={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          <i className="fa fa-trash-o"></i>
        </button>
      ),
    },
  ];

  const raiseSort = (path) => {
    const sortColumnClone = { ...sortColumn };
    if (sortColumnClone.path === path) {
      sortColumnClone.order = sortColumnClone.order === "asc" ? "desc" : "asc";
    } else {
      sortColumnClone.path = path;
      sortColumnClone.order = "asc";
    }
    onSort(sortColumnClone);
  };
  return (
    <Table
      sortColumn={sortColumn}
      onSort={raiseSort}
      columns={columns}
      data={movies}
    />
  );
};

export default MoviesTable;
