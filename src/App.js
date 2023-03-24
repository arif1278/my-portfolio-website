import './App.css';
import Experience from './Component/Component/Experience/Experience';
import IntroSection from './Component/Component/IntroSection';
import Navbar from './Component/Component/Navbar';
import Services from './Component/Component/Services/Services';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <IntroSection></IntroSection>
     <Services></Services>
     <Experience></Experience>
    </div>
  );
}

export default App;
