import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useState } from 'react';

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
`;

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
  const dispatch = useDispatch();

  // On récupère les états depuis le store Redux
  const { isLoading, error } = useSelector(state => state.auth);

  // États locaux pour le formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    // On dispatch notre action loginUser avec les identifiants
    const result = await dispatch(loginUser({ email, password }));

    // Si la connexion réussit, on redirige vers le profil
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/profile');
    }
  };

  return (
    <SignInContainer>
      <MainBgDark>
        <SignInContent onSubmit={handleSubmit}>
          <Icon className="fa fa-user-circle" />
          <SignInTitle>Sign In</SignInTitle>

          {/* Affichage des erreurs */}
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

          <InputWrapper>
            <Label htmlFor="username">Username</Label>
            <Input
              type="email"
              id="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </InputWrapper>

          <InputRemember>
            <Input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            <LabelRemember htmlFor="remember-me">Remember me</LabelRemember>
          </InputRemember>

          <SignInButton type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </SignInButton>
        </SignInContent>
      </MainBgDark>
    </SignInContainer>
  );
};
