//@ts-check
import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Slider from '../slider/Slider';


export default function NavBar() {
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to={"/"}><img src='/assets/img/logo.png' className='logoHeader navbar-brand' alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to={"/category/superPremium"} className="dropdown-item">Alimentos Super Premium</Link></li>
            <li> <Link to={"category/premium"}className="dropdown-item">Alimentos Premium</Link></li>
            <li className="dropdown-divider"></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>        
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>



    {/* <Link to={"/"}><img src='/assets/img/logo.png' classNameName='logoHeader' alt="logo" /></Link>
        <ul>
          <Link to={"/"}><li>Productos</li></Link>
          <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          </a>
          <ul title="category" classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a classNameName="dropdown-item" href="#">Alimentos para perros</a></li>
            <li><a classNameName="dropdown-item" href="#">Alimentos para gatos</a></li>
            <li classNameName="dropdown-divider"></li>
            <li><a classNameName="dropdown-item" href="#">Todos los alimentos</a></li>
          </ul>
        </li>
          <Link to={"/aboutUs"}><li>Sobre Nosotros</li></Link>
          <Link to={"Contacto"}><li>Contacto</li></Link>
          <CartWidget />
        </ul> */}
    </header>
    </>
  )
}
