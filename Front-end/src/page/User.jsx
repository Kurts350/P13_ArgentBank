import styled from 'styled-components';

const MainBgDark = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #12002b;
`;

const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 2rem;
`;
const UserTitle = styled.h1`
  text-align: center;
`;
const Button = styled.button`
  display: block;
  padding: 10px;
  font-weight: 400;
  background-color: #00bc77;
  border-color: #00bc77;
  color: #fff;
`;

const ButtonAccount = styled.button`
  display: block;
  padding: 10px;
  font-size: 1.1rem;
  margin-top: 1rem;
  width: 200px;
  font-weight: 400;
  background-color: #00bc77;
  border-color: #00bc77;
  color: #fff;
`;


const AccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: row;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
`;

const AccountContentWrapper = styled.div`

`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;
const AccountAmountDescription = styled.p`
margin: 0;
`;

const AccountContentWrapperCta = styled.div`
`

export const User = () => {
  return (
    <MainBgDark>
      <UserHeader>
        <UserTitle>
          Welcome back
          <br />
          Tony Jarvis!
        </UserTitle>
        <Button>Edit name</Button>
      </UserHeader>
      <AccountContainer>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <AccountAmount>$2,082.79</AccountAmount>
          <AccountAmountDescription>
          Available Balance
          </AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <ButtonAccount>View transactions</ButtonAccount>
        </AccountContentWrapperCta>
      </AccountContainer>
      <AccountContainer>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
          <AccountAmount>$10,928.42</AccountAmount>
          <AccountAmountDescription>
          Available Balance
          </AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <ButtonAccount>View transactions</ButtonAccount>
        </AccountContentWrapperCta>
      </AccountContainer>
      <AccountContainer>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
          <AccountAmount>$184.30</AccountAmount>
          <AccountAmountDescription>
          Current Balance
          </AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <ButtonAccount>View transactions</ButtonAccount>
        </AccountContentWrapperCta>
      </AccountContainer>
    </MainBgDark>
  );
};
