import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroV2 from "../components/sections/HeroV2";
import SelectedWork from "../components/sections/SelectedWork";
import AboutApproach from "../components/sections/AboutApproach";
import StackShowcase from "../components/sections/StackShowcase";
import FeaturedPlanzy from "../components/sections/FeaturedPlanzy";
import ContactCTA from "../components/sections/ContactCTA";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroV2 />
        <SelectedWork />
        <AboutApproach />
        <StackShowcase />
        <FeaturedPlanzy />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;