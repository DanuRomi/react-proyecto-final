import React from 'react'
import CartWidget from '../CartWidget'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo" src={logo}></img></a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/productos'>Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/productos/remera'>Remeras</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/productos/camisa'>Camisas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/productos/pantalon'>Pantalones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/productos/campera'>Camperas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/carrito'>Carrito</Link>
                    </li>
                </ul>
                <CartWidget></CartWidget>
            </div>
        </div>
    </nav>
  )
}

export default Navbar