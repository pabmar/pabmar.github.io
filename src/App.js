
import './App.css';
import Section from './components/sections/Sections';
import TitleCard from './components/cards/TitleCard';
import AboutMe from './components/cards/AboutMe';
import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bgBI from './img/bgBI.jpg'
import bgDv from './img/bgDv.jpg'
import bgPf from './img/bgPf.jpg'
import SweetScroll from 'sweet-scroll'; 
import NavBarSections from './components/sections/NavBarSections';
 

function App() {


  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const scroller = new SweetScroll({
 
      });
    },
    false,
  );

 
  
  return (
    <div>
      <div id="HomeSection">
        <Section src={bg1} align="center">
          <NavBarSections section="HomeSection"></NavBarSections>
          <TitleCard></TitleCard>
        </Section>
      </div>

      <div id="AboutMeSection">
        <Section src={bg2} align="center">
          <NavBarSections section="AboutMeSection"></NavBarSections>
          <AboutMe></AboutMe>
        </Section>
      </div>
      <div id="Abi">
        <Section src={bgBI} align="center">
          <NavBarSections section="Abi"></NavBarSections>
          <AboutMe></AboutMe>
        </Section>
      </div>
      <div id="Developer">
        <Section src={bgDv} align="center">
          <NavBarSections section="Developer"></NavBarSections>
          <AboutMe></AboutMe>
        </Section>
      </div>
      <div id="Portafolio">
        <Section src={bgPf} align="center">
          <NavBarSections section="Portafolio"></NavBarSections>
          <AboutMe></AboutMe>
        </Section>
      </div>
    </div>
  );
}

export default App;
