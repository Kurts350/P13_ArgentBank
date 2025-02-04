import { Outlet } from "react-router-dom"
import { NavBar } from "../components/navbar/NavBar"
import { Footer } from "../components/footer/Footer"
// import styled from 'styled-components';


export const Layout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
