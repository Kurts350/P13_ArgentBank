import styled from 'styled-components';
import logo from '../../assets/img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

const MainNavItemContainer = styled.div`
  display: flex;
  `;


const MainNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  margin-right: 0.5rem;
  text-decoration: none;
  color: #2c3e50;

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
  const location = useLocation();
  const isUserPage = location.pathname === '/user';
  return (
    <>
      <MainNav>
        <MainNavLogoContainer to="/">
          <MainNaveLogo src={logo} alt="Argent Bank Logo" />
        </MainNavLogoContainer>

        {isUserPage ? (
          <MainNavItemContainer>
            <MainNavItem to="/sign-in">
              <MainNavIcon className="fa fa-user-circle" />
              <MainNavTitle>Tony</MainNavTitle>
            </MainNavItem>
            <MainNavItem to="/">
              <i className="fa fa-sign-out"></i>
              <MainNavTitle>Sign Out</MainNavTitle>
            </MainNavItem>
          </MainNavItemContainer>
        ) : (
          <MainNavItem to="/sign-in">
            <MainNavIcon className="fa fa-user-circle" />
            <MainNavTitle>Sign In</MainNavTitle>
          </MainNavItem>
        )}
      </MainNav>
    </>
  );
};
