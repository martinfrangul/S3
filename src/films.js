// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors = array.map((element) => element.director);
  console.log('EXERCICE 1 ->', allDirectors);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesOfDirector = array.filter(
    (element) => element.director == director
  );
  console.log('EXERCICE 2 ->', moviesOfDirector);
  return moviesOfDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesOfDirector = array.filter(
    (element) => element.director == director
  );
  let scoresOfDirectorMap = moviesOfDirector.map((item) => item.score);
  let averageScoreOfDirector =
    scoresOfDirectorMap.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / moviesOfDirector.length;
  console.log('EXERCICE 3 ->', +(averageScoreOfDirector.toFixed(2)));
  return +(averageScoreOfDirector.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  sortedFilmsByTitle = array.slice().sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  arrayOfTitlesSorted = sortedFilmsByTitle.map((item) => item.title);

  console.log('EXERCICE 4 ->', arrayOfTitlesSorted.slice(0, 20));
  return arrayOfTitlesSorted.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedByYear = array.slice().sort(function (a, b) {
    if (a.year == b.year) {
      if (a.title < b.title) {
        return -1;
      }
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  });

  console.log('EXERCICE 5 ->', sortedByYear);
  return sortedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesByCategory = array.filter(
    (item) => item.genre.includes(genre)
  );


  const scoreAverage =
    moviesByCategory.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0
    ) / moviesByCategory.length;
  return +(scoreAverage.toFixed(2));
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
