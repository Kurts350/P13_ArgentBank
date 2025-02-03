import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;

const FooterCopyRight = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 100;
`;

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterCopyRight>Copyright 2020 Argent Bank</FooterCopyRight>
      </FooterContainer>
    </>
  );
};
