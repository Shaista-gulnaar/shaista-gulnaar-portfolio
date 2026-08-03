import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import GrainOverlay from './components/GrainOverlay';
import PageLoader from './components/PageLoader';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Experience from './sections/Experience';
import CaseStudies from './sections/CaseStudies';
import Capabilities from './sections/Capabilities';
import ExecutionLogic from './sections/ExecutionLogic';
import TechnicalAlignment from './sections/TechnicalAlignment';
import Credibility from './sections/Credibility';
import About from './sections/About';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <PageLoader />
      <GrainOverlay />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <CaseStudies />
        <div className="section-divider" />
        <Capabilities />
        <div className="section-divider" />
        <ExecutionLogic />
        <div className="section-divider" />
        <TechnicalAlignment />
        <div className="section-divider" />
        <Credibility />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
