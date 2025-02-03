import { NavBar } from '../components/navbar/NavBar';
import { HomeBanner } from '../components/homeBanner/HomeBanner';
import { Features } from '../components/features/Features';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomeBanner />
      <Features />
    </>
  );
};
