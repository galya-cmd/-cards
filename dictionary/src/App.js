import logo from './logo.svg';
import './App.css';

import Dictionary from './components/dictionary';
import Test from './components/test';
import Table from './components/table';
import Dictionary1 from './components/dictionary1';
import Dictionary2 from './components/dictionary2';


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
      
      <Dictionary />
      <Dictionary2 />
      <Dictionary1 />
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
