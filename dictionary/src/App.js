import logo from './logo.svg';
import './App.css';

import Dictionary from './components/dictionary';
import Test from './components/test';




function App() {
  return (
    <>
    <h1>Слова</h1>
    <div className="App">
      <Dictionary name="I" />
      <Dictionary name="love" />
      <Dictionary name="IT" />
      <Dictionary name="need" />
      <Dictionary name="any" />
      <Dictionary name="work" />
      <Dictionary name="give" />
      <Dictionary name="our" />

    
  
      <Test />
    </div>
    </>
  );
}

export default App;
