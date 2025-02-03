import styled from 'styled-components';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';

const FeaturesContainer = styled.div`
  display: flex;
`;
const FeatureItem = styled.div`
  padding: 2.5rem;
  width: 33.33%;
  text-align: center;
`;
const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
font-weight: 200;
`;

export const Features = () => {
  return (
    <>
      <FeaturesContainer>
        <FeatureItem>
          <FeatureIcon src={iconChat} />
          <FeatureTitle>You are our #1 priority</FeatureTitle>
          <FeatureText>
            Need to talk to a representative? You can get in touch through our 24/7 chat or through
            a phone call in less than 5 minutes.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={iconMoney} />
          <FeatureTitle>More savings means higher rates</FeatureTitle>
          <FeatureText>
            The more you save with us, the higher your interest rate will be!
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={iconSecurity} />
          <FeatureTitle>Security you can trust</FeatureTitle>
          <FeatureText>
            We use top of the line encryption to make sure your data and money is always safe.
          </FeatureText>
        </FeatureItem>
      </FeaturesContainer>
    </>
  );
};
