import { useState } from "react";
import MovieCalculation from "./MovieCalculation";
const MoviesBooking = () => {
  const movies = [
    { id: 1, name: "Action Movie", price: 10.0 },
    { id: 2, name: "Romantic Movie", price: 8.0 },
    { id: 3, name: "Comedy Movie", price: 7.0 }
  ];
  const [movieList, setmovieList] = useState([]);
  const handleItemCart = (item) => {
    setmovieList((prev) => {
      const existingItems = prev.find((movieList) => movieList.id === item.id);
      if (existingItems) {
        return prev.map((movieList) =>
          movieList.id == item.id
            ? { ...movieList, quantity: movieList.quantity + 1 }
            : movieList
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  return (
    <>
      <h1 className="heading">Select Your Favorite Movie</h1>
      {movies.map((movie, id) => (
        <li key={id} className="list-group-item active" aria-current="true">
          {movie.name} --- {movie.price}
          <button
            type="button"
            className="button-item btn btn-success"
            onClick={() => handleItemCart(movie)}
          >
            Add to Cart
          </button>
        </li>
      ))}
      <MovieCalculation movieList={movieList}></MovieCalculation>
    </>
  );
};
export default MoviesBooking;
