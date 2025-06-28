import MovieCard from "../components/MovieCard.jsx";
import {useEffect, useState} from "react";

function Home(){
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const delayDebounce = setTimeout(()=>{
            if(query.trim() !== ""){
                fetch(`https://www.omdbapi.com/?apikey=10af7e11&s=${query}`)
                    .then((res) => res.json())
                    .then((data) => {
                        if(data.Search){
                            setResults(data.Search);
                        }else{
                            setResults([]);
                        }
                    })
            }
        }, 500)

        return ()=>{
            clearTimeout(delayDebounce);
        }
    },[query])
    return(
        <div>
            <h2>Search Movies</h2>
            <input
                type="text"
                placeholder="Search for movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}

            />

            <div className="movie-list">
                {
                    results.map((movie)=>(
                        <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;