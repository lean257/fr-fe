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

export async function fetchData(url) {
  const result = await fetch(url, {
    headers: {
      Authorization: "Bearer Wookie2019",
    },
  });
  return await result.json();
}
