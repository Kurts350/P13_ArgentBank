import styled from 'styled-components';
import logo from '../../assets/img/argentBankLogo.png';

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;

const MainNavLogoContainer = styled.div``;

const MainNaveLogo = styled.img`
  width: 200px;
`;
const MainNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  margin-right: 0.5rem;
`;

const MainNavIcon = styled.i`
color: #2c3e50;`

const MainNavTitle = styled.span`
  margin: 0;
  font-weight: 500;
  color: #2c3e50;
`;

export const NavBar = () => {
  return (
    <>
      <MainNav>
        <MainNavLogoContainer>
          <MainNaveLogo src={logo} alt="Argent Bank Logo" />
        </MainNavLogoContainer>
        <MainNavItem>
          <MainNavIcon className="fa fa-user-circle"/>
          <MainNavTitle>Sign In</MainNavTitle>
        </MainNavItem>
      </MainNav>
    </>
  );
};
