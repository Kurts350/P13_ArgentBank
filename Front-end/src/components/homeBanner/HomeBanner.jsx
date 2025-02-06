import styled from 'styled-components';
import bankTree from '../../assets/img/bank-tree.jpeg';

const HeroContainer = styled.div`
  position: relative;
  background-image: url(${bankTree});
  height: 400px;
  background-position: 0% 33%;
  background-size: cover;

  @media (max-width: 920px) {
    height: 300px;
    background-position: 0 -50px;
  }
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

  @media (max-width: 920px) {
  position: relative;
    top: 2rem;
    width: 200px;
    margin: 0 auto;
    right: 0;
}
  }
`;

const HeroContentBoldText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 920px) {
    font-size: 1rem;
  }
`;

const HeroContentText = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: 1rem;
    @media (max-width: 920px) {
    font-size: 0.9rem;
  }
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
