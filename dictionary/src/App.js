import logo from './logo.svg';
import './App.css';
import'./components.dictionary.css'
import Dictionary from './components/dictionary';

function App() {
  return (
    <div className="App">
      <Dictionary name="I"/>
      <Dictionary name="am"/>
    </div>
  );
}

export default App;
