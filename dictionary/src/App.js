import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dictionary from './components/dictionary';
import Test from './components/test';
import Table from './components/table';
import Cardlist from './components/cardlist';
import Header from "./components/header";
import About from './components/about';
import wordlist from "./components/wordlist";
import WordList from './components/wordlist';



let dicts = [{
  id: "10919",
  name: 'horse',
 transcription : '[hɔːs]',
  translation:"лошадь" },
  {
    id: "10920",
  name: 'mouse',
   transcription : '[maʊs]', 
   translation:"мышь" 
}, 
{
  id: "10921",
  name: 'dragonfly', 
  transcription : '[ˈdrægənflaɪ]', 
  translation:"стрекоза" 
},
{
  id: "10922",
  name: "dog",
transcription: "[dɒg]",
translation: "собака",
},
{
  id: "10924",
  name: "rabbit",
  transcription: "[ˈræbɪt]",
  translation:"кролик",

  
}]



function App() {
  return (
    <>
    <Header />
    
    <h1>Word table</h1>
   
    
    <div className="App">
    <Router>
    <Routes>
    <Route exact path='/about' element={<About/>}></Route>
      <Route path='/table'element={<Table/>}></Route>
        
        <Route path='/dictionary'element={<Dictionary />}></Route>
    
    </Routes>
    </Router>
    <Cardlist/>
    <div>
      
      {
        dicts.map((dict) => <Table name={dict.name} transcription = {dict.transcription } translation = {dict.translation} key={dict.id}></Table>
        )
      }
    </div>
      
      
    </div>
  <WordList />
  

  
    </>
  );
}

export default App;
