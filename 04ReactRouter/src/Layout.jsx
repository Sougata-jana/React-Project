import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Hooter'
import Footer from './components/footer/footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout