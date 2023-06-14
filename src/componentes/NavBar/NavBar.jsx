import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgNike = "https://i.pinimg.com/originals/55/f6/8e/55f68e1fbbfb3a97de3447dea15fbe28.png"
  return (
    <header>
      <Link to={"/"}>
        <img className="imgNike" src={imgNike} alt="Logo Nike" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink  to={`/categoria/1`}  > Zapatillas </NavLink>
          </li>

          <li>
            <NavLink  to={`/categoria/2`}> Buzos </NavLink>
          </li>

          <li>
            <NavLink  to={`/categoria/3`}> Camperas </NavLink>
          </li>



        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar