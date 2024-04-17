import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="d-flex flex-row justify-content-between align-items-center py-3">


      <img src="" alt="logo" />


      <p >WebSite Desenvolvido por Rafael Dev &copy; 2024</p>


      <div className="d-flex flex-row align-items-center">

        <div className="d-flex flex-column align-items-center justify-content-center">


          <ul className="d-flex me-3">
            <li><a href="" className='icon-ctt p-1'><BsInstagram /></a></li>
            <li><a href="" className='icon-ctt p-1'><FaWhatsapp /></a></li>
            <li><a href="" className='icon-ctt p-1'><MdEmail /></a></li>
          </ul>

        </div>
      </div>


    </footer>
  )
}

export default Footer