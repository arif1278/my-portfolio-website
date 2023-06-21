import { useContext } from 'react';
import './App.css';
import Experience from './Component/Component/Experience/Experience';
import IntroSection from './Component/Component/IntroSection';
import Navbar from './Component/Component/Navbar';
import Footer from './Component/Component/Portfolio/Footer/Footer';
import Portfolio from './Component/Component/Portfolio/Portfolio';
import Services from './Component/Component/Services/Services';
import Contact from './Component/Component/Testimonials/Contact/Contact';
import Testimonial from './Component/Component/Testimonials/Testimonial';
import Works from './Component/Component/Works/Works';
import { themeContext } from './Component/Component/Toggle/Context';

function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div
    style={{background:darkMode? 'black':'',
       color:darkMode? 'white':''
  }}
    >
     <Navbar></Navbar>
     <IntroSection></IntroSection>
     <Services></Services>
     <Experience></Experience>
     <Works></Works>
     <Portfolio></Portfolio>
     <Testimonial></Testimonial>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
