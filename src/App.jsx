import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import Favorites from "./pages/Favorites.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<MoviePage/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
