import React, { useState } from "react";
import { getMovies } from "./../services/getMovies";
import { getGenres } from "./../services/getGenres";
import { paginate } from "./../utils/paginate";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [currentPage, setCurrentPage] = useState(1);
  const [genres] = useState([{ id: "", name: "All Genre" }, ...getGenres()]);
  const [currentGenre, setCurrentGenre] = useState(genres[0]);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const pageSize = 4;

  const handleLike = (movie) => {
    const moviesClone = [...movies];
    const index = moviesClone.indexOf(movie);
    moviesClone[index] = { ...movie };
    moviesClone[index].liked = !moviesClone[index].liked;
    setMovies(moviesClone);
  };

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m.id !== movie.id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    setCurrentPage(1);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const filtered =
    currentGenre && currentGenre.id
      ? movies.filter((m) => m.genre.name === currentGenre.name)
      : movies;
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const paginateMovie = paginate(sorted, currentPage, pageSize);

  if (movies.length === 0)
    return <h2 className="text-danger">There are no movies in the database</h2>;

  return (
    <div className="row">
      <div className="col-md-3 align-self-center">
        <ListGroup
          genres={genres}
          currentGenre={currentGenre}
          onGenreChange={handleGenreChange}
        />
      </div>
      <div className="col-md-9">
        <h2 className="text-primary">
          There are {filtered.length} movies in the database
        </h2>
        <MoviesTable
          movies={paginateMovie}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
          sortColumn={sortColumn}
        />

        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
