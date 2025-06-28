import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieCard from "../components/MovieCard.jsx";

function MoviePage(){
    const {id} = useParams();
    const [movie,setMovie] = useState(null);

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=10af7e11&i=${id}`)
            .then((res)=> res.json())
            .then((data)=>{
                setMovie(data);
            })
    },[id]);

    return movie ? (
        <div>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title}/>
            <p><strong>Plot : </strong>{movie.Plot}</p>
            <p><strong>Director : </strong>{movie.Director}</p>
            <p><strong>Genre : </strong>{movie.Genre}</p>
            <p><strong>Released :</strong>{movie.Released}</p>
        </div>
    ):(
        <p> Loading....</p>
    );

}

export default MoviePage;