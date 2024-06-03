import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='flex-container'>
      <Navbar />
      <div className='page-body'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout