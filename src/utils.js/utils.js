function findAllGenres(movies) {
  let allGenres = new Set();
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => allGenres.add(genre));
  });
  return allGenres;
}

export function findMoviesByGenres(movies) {
  let allGenres = findAllGenres(movies);
  let collection = {};
  allGenres.forEach(
    (genre) =>
      (collection[genre] = movies.filter((m) => m.genres.includes(genre)))
  );
  return collection;
}
export function fetchAllMovies(url) {
  return fetch(url, {
    headers: {
      Authorization: "Bearer Wookie2019",
    },
  }).then((res) => res.json());
}
