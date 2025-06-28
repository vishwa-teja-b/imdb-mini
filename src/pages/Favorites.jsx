import {useContext} from "react";
import {FavoritesContext} from "../context/FavoritesContext.jsx";

function Favorites(){
    const {favorites, removeFromFavorites} = useContext(FavoritesContext);


    return(
        <div>
            <h2> My Favorite Movies</h2>
            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ):(
                <ul>
                    {favorites.map((movie)=>(
                        <li key={movie.imdbID}>
                            {movie.Title}
                            <button onClick={()=> removeFromFavorites(movie.imdbID)}>❌ Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default Favorites;