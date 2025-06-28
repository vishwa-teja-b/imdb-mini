import {createContext, useEffect, useState} from "react";

export const FavoritesContext = createContext();

function FavoritesProvider({children}){
    const [favorites, setFavorites] = useState(()=>{
        const saved = localStorage.getItem("favorites");
        return saved? JSON.parse(saved):[];
    });

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites]);

    const addToFavorites = (movie)=>{
        if(!favorites.some((m)=> m.imdbID ===movie.imdbID)){
            setFavorites([...favorites, movie]);
        }
    };

    const removeFromFavorites = (id)=>{
        setFavorites(favorites.filter((movie)=> movie.imdbID !== id));
    };
    return (
        <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )




}

export default FavoritesProvider;