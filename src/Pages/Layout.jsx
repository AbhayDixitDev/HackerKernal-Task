import React from 'react'
import Header from '../Components/Dashboard/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Dashboard/Footer'

const Layout = () => {
  return (

    <>
    <Header/>
    <hr />
    <Outlet/>
    <hr />
    <Footer/>
    </>
  )
}

export default Layout