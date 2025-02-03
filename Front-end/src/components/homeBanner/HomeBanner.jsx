import styled from 'styled-components';
import bankTree from '../../assets/img/bank-tree.jpeg';

const HeroContainer = styled.div`
  position: relative;
  background-image: url(${bankTree});
  height: 400px;
  background-position: 0% 33%;
  background-size: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 300px;
  background-color: white;
  margin: 2rem;
  padding: 2rem;
  text-align: left;
`;

const HeroContentBoldText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const HeroContentText = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: 1rem;

`;

export const HomeBanner = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroContentBoldText>No fees.</HeroContentBoldText>
          <HeroContentBoldText>No minimum deposit.</HeroContentBoldText>
          <HeroContentBoldText>High interest rates.</HeroContentBoldText>
          <HeroContentText>Open a savings account with Argent Bank today!</HeroContentText>
        </HeroContent>
      </HeroContainer>
    </>
  );
};
