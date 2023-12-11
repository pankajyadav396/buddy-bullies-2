import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import Header from './Components/Header';
import Minting from './Components/Minting';
import Roadmap from './Components/Roadmap';
import Faq from './Components/Faq';
import Team from './Components/TeamSec';
import Footersec from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Minting />
      <Map />
      <Roadmap />
      <Faq />
      <Team />
      <Footersec />
    </div>
  );
}

export default App;
