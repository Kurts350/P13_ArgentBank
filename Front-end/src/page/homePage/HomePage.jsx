import { HomeBanner } from '../../components/homeBanner/HomeBanner';
import { Features } from '../../components/features/Features';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../features/auth/authSlice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector(state => state.auth);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, user]);

  return (
    <>
      <HomeBanner />
      <Features />
    </>
  );
};