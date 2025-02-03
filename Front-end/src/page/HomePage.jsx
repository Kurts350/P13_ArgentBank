import { NavBar } from '../components/navbar/NavBar';
import { HomeBanner } from '../components/homeBanner/HomeBanner';
import { Features } from '../components/features/Features';
import { Footer } from '../components/footer/Footer';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomeBanner />
      <Features />
      <Footer />
    </>
  );
};
