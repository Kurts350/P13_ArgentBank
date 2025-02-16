import styled from 'styled-components';
import logo from '../../assets/img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

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

const MainNavLogo = styled.img`
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
  // On utilise useSelector pour obtenir les informations de l'utilisateur depuis Redux
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // Fonction de déconnexion
  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <MainNav>
        <MainNavLogoContainer to="/">
          <MainNavLogo src={logo} alt="Argent Bank Logo" />
        </MainNavLogoContainer>

        {isAuthenticated ? (
          <MainNavItemContainer>
            <MainNavItem to="/profile">
              <MainNavIcon className="fa fa-user-circle" />
              <MainNavTitle>{user?.firstName || 'User'}</MainNavTitle>
            </MainNavItem>
            <MainNavItem to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              <MainNavTitle>Sign Out</MainNavTitle>
            </MainNavItem>
          </MainNavItemContainer>
        ) : (
          <MainNavItem to="/login">
            <MainNavIcon className="fa fa-user-circle" />
            <MainNavTitle>Sign In</MainNavTitle>
          </MainNavItem>
        )}
      </MainNav>
    </>
  );
};