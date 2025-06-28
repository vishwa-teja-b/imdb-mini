import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <Link to="/" style={{marginRight : "15px"}}>🏠 Home</Link>
            <Link to="/favorites">❤️ Favorites</Link>
        </nav>
    );
}

export default Navbar;