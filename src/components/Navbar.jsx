import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/"><BiCameraMovie /> MoviesProject</Link>
      </h2>
      <form>
        <input type="text" placeholder="Buscar Filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar