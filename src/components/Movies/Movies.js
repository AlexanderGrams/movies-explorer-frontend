import { useEffect, useState } from "react";
import MainBlocks from "../MainBlocks/MainBlocks";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./movies.sass";
import {moviesApi} from "../../utils/MoviesApi";
import {mainApi} from "../../utils/MainApi";
import {calcCardsCounter} from "../../utils/constant";
import Preloader from "../Preloader/Preloader";

function Movies({loggedIn}) {
  const [sourceMovies, setSourceMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [savedSearch, setSavedSearch] = useState(JSON.parse(
    localStorage.getItem('search')) || { "film": "", "shorts": false }
 );
  const [isLoading, setIsLoading] = useState(false);

  const counter = calcCardsCounter();
  const [cardsCounter, setCardCounter] = useState(counter.init);
  const loadMore = () => {
    const { more } = calcCardsCounter();
    setCardCounter(cardsCounter + more);
  }

  // Фильтрация
  const filterMovies = (search, films) => {
    setSavedSearch(search);
    localStorage.setItem('search', JSON.stringify(search));
    setFilteredMovies(films.filter((movie) => {
      const isValidName = movie.nameRU.toLowerCase().includes(search.film.toLowerCase());
      return search.shorts ? (isValidName && movie.duration <= 40) : isValidName;
    }));
    const {init} = calcCardsCounter();
    setCardCounter(init);
  }

  useEffect(() => {
    loadCards(savedSearch)
  }, [savedSearch]);

  useEffect(() => {
    const localSearch = localStorage.getItem('search');
    const localMovies = localStorage.getItem('movies');
    if(localSearch && localMovies){
      const parsedSearch = JSON.parse(localSearch);
      const parsedMovies = JSON.parse(localMovies);
      setSourceMovies(parsedMovies);
      filterMovies(parsedSearch, parsedMovies);
    }
  }, []);

  // const loadCards = (search) => {
  //   if(sourceMovies.length === 0) {
  //     setIsLoading(true);
  //     moviesApi.getInitialMovies()
  //       .then((serverMovies) => {
  //         setSourceMovies(serverMovies);
  //         filterMovies(search, serverMovies);
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //       .finally(() => {
  //         setIsLoading(false)
  //       })
  //   }else{
  //     filterMovies(search, sourceMovies);
  //   }
  // }

  const loadCards = (search) => {
    if(sourceMovies.length === 0) {
      setIsLoading(true);
      Promise.all([
        moviesApi.getInitialMovies(),
        mainApi.getSavedMovies()
      ])
        .then(([beatMovies, savedMovies]) => {
          const movies = beatMovies.map((beatMovie) => {
            const savedMovie = savedMovies.find((savedFilm) => beatMovie.id === savedFilm.movieId);
            if(savedMovie) {
              beatMovie.isSaved = true;
              beatMovie.idSavedMovie = savedMovie._id;
            }else{
              beatMovie.isSaved = false;
            }
            return beatMovie;
          })
          setSourceMovies(movies)
          filterMovies(search, movies);

          localStorage.setItem('movies', JSON.stringify(movies))
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }else{
      filterMovies(search, sourceMovies);
    }
  }

  const handleMovieLike = (movie) => {
    const isLike = movie.isSaved;
    movie.isSaved = !isLike;
    setSourceMovies((state) => state.map((film) => film.id === movie.id ? movie : film))
  }

  const onClickSaved = (movie) => mainApi.giveMovie(movie)
    .then((updatedMovie) => {
      // updatedMovie.isSaved = true;
      handleMovieLike(movie)
      // console.log(updatedMovie)
    })
    .catch((err) => {
      console.log(err)
    })

  const onClickRemove = (movie) => mainApi.deletMovie(movie)
    .then((updatedMovie) => {
      handleMovieLike(movie)
      // console.log(updatedMovie)
    })
    .catch((err) => {
      console.log(err)
    })

  const onClickUpdate = (movie) => (movie.isSaved ? onClickRemove(movie) : onClickSaved(movie))

  return (
    <MainBlocks loggedIn={loggedIn} isMainPages={true}>
      <main className="movies">
        <SearchForm loadCards={loadCards} savedSearch={savedSearch} setSavedSearch={setSavedSearch} />
        {
          isLoading
          ?
          <Preloader />
          :
          <MoviesCardList currentMovies={filteredMovies.slice(0, cardsCounter)} loadMore={loadMore} hasMore={filteredMovies.length > cardsCounter} onClickUpdate={onClickUpdate} />
        }
      </main>
    </MainBlocks>
  );
}

export default Movies;
