import styled from 'styled-components';
import logo from '../../assets/img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;

const MainNavLogoContainer = styled(NavLink)`
  margin: 0;
  padding: 0;
  height: 100%;
`;

const MainNaveLogo = styled.img`
  width: 200px;
`;
const MainNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  margin-right: 0.5rem;
  text-decoration: none;
`;

const MainNavIcon = styled.i`
  color: #2c3e50;
`;

const MainNavTitle = styled.span`
  margin: 0;
  font-weight: 500;
  color: #2c3e50;
`;

export const NavBar = () => {
  return (
    <>
      <MainNav>
        <MainNavLogoContainer to="/">
          <MainNaveLogo src={logo} alt="Argent Bank Logo" />
        </MainNavLogoContainer>
        <MainNavItem to="/sign-in">
          <MainNavIcon className="fa fa-user-circle" />
          <MainNavTitle>Sign In</MainNavTitle>
        </MainNavItem>
      </MainNav>
    </>
  );
};
