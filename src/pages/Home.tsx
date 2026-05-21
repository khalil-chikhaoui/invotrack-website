import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import StatsTeaser from "../components/home/StatsTeaser";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div className="font-sans text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 
    selection:bg-brand-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features /> 
      <StatsTeaser /> 
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
