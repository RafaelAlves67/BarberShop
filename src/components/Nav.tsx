import { Link } from "react-router-dom"
import "./Nav.css"
import Logo from '../assets/logoBarberShop.png'

const Nav = () => {
  return (
    <nav>
        <img src={Logo} alt="logo" />

    
          <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">SOBRE NÓS</Link></li>
              <li><Link to="/planos">PLANOS E PREÇOS</Link></li>
              <li className="me-5"><Link to="/Produtos">CONTATO</Link></li>     
              <li className="ms-5"><Link to="/Produtos">AGENDE SEU HORÁRIO</Link></li>     
          </ul>
    </nav>
  )
}

export default Nav