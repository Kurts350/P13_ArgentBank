import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/navbar/NavBar';
import { Footer } from '../components/footer/Footer';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
`

export const Layout = () => {
  return (
    <LayoutContainer>
      <NavBar />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};
