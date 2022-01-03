const genres = [
  { id: "action", name: "Action" },
  { id: "comedy", name: "Comedy" },
  { id: "thriller", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
