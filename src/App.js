import './App.css';
import IntroSection from './components/introSection/introSection';
import Navbar from './components/navbar/navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <Projects />
    </div>
  );
}

export default App;
