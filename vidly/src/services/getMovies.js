const movies = [
  {
    id: 1,
    title: "Terminator",
    genre: { id: "action", name: "Action" },
    inStock: 4,
    rate: 9.3,
    liked: true,
  },
  {
    id: 2,
    title: "Die Hard",
    genre: { id: "action", name: "Action" },
    inStock: 7,
    rate: 2.3,
  },
  {
    id: 3,
    title: "Get Out",
    genre: { id: "thriller", name: "Thriller" },
    inStock: 3,
    rate: 3.3,
  },
  {
    id: 4,
    title: "Trip to Italy",
    genre: { id: "comedy", name: "Comedy" },
    inStock: 2,
    rate: 7.7,
  },
  {
    id: 5,
    title: "Airplane",
    genre: { id: "comedy", name: "Comedy" },
    inStock: 4,
    rate: 6.8,
  },
  {
    id: 6,
    title: "Wedding Crashers",
    genre: { id: "comedy", name: "Comedy" },
    inStock: 6,
    rate: 5.3,
  },
  {
    id: 7,
    title: "Gone Girl",
    genre: { id: "thriller", name: "Thriller" },
    inStock: 5,
    rate: 4.3,
  },
  {
    id: 8,
    title: "The Sixth Sence",
    genre: { id: "thriller", name: "Thriller" },
    inStock: 3,
    rate: 6.3,
  },
  {
    id: 9,
    title: "The Avengers",
    genre: { id: "action", name: "Action" },
    inStock: 8,
    rate: 7.3,
  },
];

export function getMovies() {
  return movies;
}
