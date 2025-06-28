import {Link} from "react-router-dom";
import {useContext} from "react";
import {FavoritesContext} from "../context/FavoritesContext.jsx";

function MovieCard({movie}){
    // const movie = props.movie
    const {addToFavorites} = useContext(FavoritesContext);

    return (
        <div className="card">
            <img src={movie.Poster} alt={movie.Title}/>
            <h3>{movie.Title}</h3>
            <Link to={`movie/${movie.imdbID}`}>More Info</Link>
            <button onClick={()=> addToFavorites(movie)}>❤️ Add to Favorites</button>
        </div>
    )
}
export default MovieCard;