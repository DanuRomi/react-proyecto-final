import React from 'react'

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="/productos" className="nav-link px-2 text-muted">Productos</a></li>
          <li className="nav-item"><a href="/carrito" className="nav-link px-2 text-muted">Carrito</a></li>
        </ul>
        <p className="text-center text-muted">© 2024 Schvemler Daniela</p>
      </footer>
    </div>
  )
}

export default Footer