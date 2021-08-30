import logo from './logo.svg';
import './App.css';
import 'dicnionary.scss';
import Dictionary from './components/dictionary';

function App() {
  return (
    <div className="App">
      <Dictionary name="I"/>
      <Dictionary name="am"/>
      <Dictionary />
      <Dictionary />
      <Dictionary />
      <Dictionary />
      <Dictionary />
    </div>
  );
}

export default App;
