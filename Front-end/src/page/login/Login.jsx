import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignInContainer = styled.div`
  display: block;
`;

const MainBgDark = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #12002b;
  height: 80vh;
`;

const SignInContent = styled.form`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
`;

const Icon = styled.i``;

const SignInTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRemember = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-bottom: 1rem;
  gap: 0.2rem;
`;

const LabelRemember = styled.label`
font-weight: 300;
`

const SignInButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: 400;
    text-decoration: underline;
    margin-top: 1rem;
    border: none;
    background-color: #00bc77;
    color: #fff;
`;

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };
  return (
    <SignInContainer>
      <MainBgDark>
        <SignInContent onSubmit={handleSubmit}>
          <Icon className="fa fa-user-circle" />
          <SignInTitle>Sign In</SignInTitle>
          <InputWrapper>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" autoComplete="username" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" autoComplete="current-password" />
          </InputWrapper>
          <InputRemember>
            <Input type="checkbox" />
            <LabelRemember htmlFor="remerber-me">Remember me</LabelRemember>
          </InputRemember>
          <SignInButton type='submit'>Sign In</SignInButton>
        </SignInContent>
      </MainBgDark>
    </SignInContainer>
  );
};
