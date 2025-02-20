import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../../features/auth/authSlice';
import { fetchUserProfile } from '../../features/auth/authSlice';
import { useEffect } from 'react';

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
  @media (max-width: 720px) {
    width: 100%;
  }
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
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const AccountContentWrapper = styled.div`
  @media (max-width: 720px) {
    width: 100%;
  }
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
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const EditConatiner = styled.div`
  display: flex;
  gap: 1rem;
  `


const EditInput = styled.input`
  padding: 0.5rem;
  font-size: 1.1rem;
  width: 200px;
  text-align: center;
  border-radius: 4px;
  border: 2px solid #00bc77;
`;

const EditButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(state => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState({
    firstName: '',
    lastName: '',
  });

  // Récupérer les données du profil au chargement
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  // Mettre à jour le formulaire quand les données utilisateur changent
  useEffect(() => {
    if (user) {
      setEditedName({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
      });
    }
  }, [user]);

  const handleEdit = async e => {
    e.preventDefault();
    const result = await dispatch(updateUserProfile(editedName));
    if (result.meta.requestStatus === 'fulfilled') {
      setIsEditing(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <MainBgDark>
      <UserHeader>
        <UserTitle>
          Welcome back
          <br />
          <span>
            {user?.firstName} {user?.lastName}!
          </span>
        </UserTitle>
        {!isEditing ? (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit Name</Button>
          </>
        ) : (
          <EditForm onSubmit={handleEdit}>
            <EditConatiner>
              <EditInput
                type="text"
                value={editedName.firstName}
                onChange={e =>
                  setEditedName({
                    ...editedName,
                    firstName: e.target.value,
                  })
                }
                placeholder="First Name"
              />
              <EditInput
                type="text"
                value={editedName.lastName}
                onChange={e =>
                  setEditedName({
                    ...editedName,
                    lastName: e.target.value,
                  })
                }
                placeholder="Last Name"
              />
            </EditConatiner>
            <EditButtons>
              <Button type="submit">Save</Button>
              <Button type="button" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </EditButtons>
          </EditForm>
        )}
      </UserHeader>

      <AccountContainer>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <AccountAmount>$2,082.79</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <ButtonAccount>View transactions</ButtonAccount>
        </AccountContentWrapperCta>
      </AccountContainer>

      <AccountContainer>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
          <AccountAmount>$10,928.42</AccountAmount>
          <AccountAmountDescription>Available Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <ButtonAccount>View transactions</ButtonAccount>
        </AccountContentWrapperCta>
      </AccountContainer>

      <AccountContainer>
        <AccountContentWrapper>
          <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
          <AccountAmount>$184.30</AccountAmount>
          <AccountAmountDescription>Current Balance</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapperCta>
          <ButtonAccount>View transactions</ButtonAccount>
        </AccountContentWrapperCta>
      </AccountContainer>
    </MainBgDark>
  );
};
