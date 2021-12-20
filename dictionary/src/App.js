import logo from './logo.svg';
import './App.css';

import Dictionary from './components/dictionary';
import Test from './components/test';
import Table from './components/table';

let dicts = [{name: 'hi', transcription : '[хай]', translation:"привет" },{
  name: 'hello', transcription : '[хэлоу]', translation:"здравствуйте,привет" 
}, {
  name: 'sorry', transcription : '[сори]', translation:"извини(те)" 
}]



function App() {
  return (
    <>
    <h1>Слова</h1>
    <div className="App">
      <Dictionary name="I" />
      <Dictionary name="love" />
      <Dictionary name="it" />
      <Dictionary name="need" />
      <Dictionary name="any" />
      <Dictionary name="work" />
      <Dictionary name="give" />
      <Dictionary name="our" />
      <Test />
    </div>
    <div>
      
       {
        dicts.map((dict) => <Table name={dict.name} transcription = {dict.transcription } translation = {dict.translation}></Table>
        )
      }
    </div>
    </>
  );
}

export default App;
