import './App.css';
import IntroSection from './components/introSection/introSection';
import Navbar from './components/navbar/navbar';
import BodySection from './components/bodySection/bodySection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <BodySection />
    </div>
  );
}

export default App;
